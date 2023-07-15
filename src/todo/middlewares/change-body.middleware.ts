import {BadRequestException, Injectable, NestMiddleware} from '@nestjs/common'
import {Request,Response,NextFunction} from 'express'

import { validate, ValidationError} from 'class-validator'
import { taskSchemas } from 'src/todo/dto'

import { TodosCategory } from 'src/todo/interfaces/todo.interface'

@Injectable()
export class DinamicValidationDTOs implements NestMiddleware{
    async use(req:Request, _: Response, next: NextFunction) {

        const data = req.body
        const category = req.body.category
        
        if( !category ) throw new BadRequestException('Category is required')

        
        if ( Object.values(TodosCategory).includes(category) ){

            const dtoSchema = new taskSchemas[category].dto()
            const subDtoSchema = new taskSchemas[category].subDto()
            
            Object.assign(dtoSchema, data)
                       
            const errorSchema : ValidationError[] = await validate(dtoSchema)
            
            if(errorSchema.length > 0) 
            throw new BadRequestException({error: errorSchema.map(err => err.constraints)})

            for ( let index = 0; index < data.todos.length; index++ ){

                Object.assign( subDtoSchema, data.todos[index] )
                
                const errorSubSchema: ValidationError[] = await validate( subDtoSchema )
                
                if( errorSubSchema.length > 0 )
                throw new BadRequestException({ 
                    error: errorSubSchema.map( err => err.constraints ),
                    position: index  
                })
            }
              
        }
        
        next()
    }
}
