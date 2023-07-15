import { IsString, IsNotEmpty, IsBoolean } from "class-validator";
import { ITodoGym } from "../interfaces/todo.interface";

export class TodoGymDto implements ITodoGym{

    @IsString()
    @IsNotEmpty()
    exercise: string;

    @IsString()
    @IsNotEmpty()
    repetitons: string;

    @IsBoolean()
    @IsNotEmpty()
    done: boolean;

}