import { IsString, IsNotEmpty, IsBoolean } from "class-validator";
import { ITodoAcademy } from "../interfaces/todo.interface";


export class TodoAcademyDto implements ITodoAcademy{

    @IsString()
    @IsNotEmpty()
    matter: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsBoolean()
    @IsNotEmpty()
    done: boolean;

}
