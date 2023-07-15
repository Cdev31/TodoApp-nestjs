import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TodoModule } from './todo/todo.module';
import { DinamicValidationDTOs } from "./todo/middlewares/change-body.middleware";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";


@Module({
    providers: [],
    imports: [
        TodoModule, 
        UserModule, 
        AuthModule,
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DB_URL)
       ]
   }
)
export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(DinamicValidationDTOs)
        .forRoutes({path: 'todo', method: RequestMethod.POST})
    }
}
