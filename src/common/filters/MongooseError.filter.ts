import { ExceptionFilter, Catch , ArgumentsHost } from '@nestjs/common'
import { Response } from 'express'
import { Error } from 'mongoose'

@Catch(Error.ValidationError)
export class MongoDBError implements ExceptionFilter{
    catch(exception: Error.ValidationError,  host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const res = ctx.getResponse<Response>()
        
        res.status(409).json({
            error: exception.errors,
            message: exception.message
        })

    }
}