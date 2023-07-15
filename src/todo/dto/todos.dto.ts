import { IsIn, IsNotEmpty, IsString, Length } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types';
import { TodosCategory } from '../interfaces/todo.interface';

export class CreateTodoDto {

    @IsNotEmpty()
    @IsString()
    finish_date: string;

    @IsNotEmpty()
    @IsString()
    @Length(20,40)
    title: string;
    
    @IsIn(Object.values(TodosCategory))
    category:string
}


export class UpdateTodoDto extends PartialType(CreateTodoDto) {}


