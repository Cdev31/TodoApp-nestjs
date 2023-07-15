import { IsArray, ArrayNotEmpty, ValidateNested, IsNotEmpty } from "class-validator"
import { TodoAcademyDto } from "./todo-academy.dto"
import { TodoGymDto } from "./todo-gym.dto"
import { CreateTodoDto } from "./todos.dto"

export class CreateTodoGymDto extends CreateTodoDto{
    
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({each: true})
    todos: TodoGymDto[]
}

export class CreateTodoAcademyDto extends CreateTodoDto{
    
    @IsNotEmpty()
    @ValidateNested({each:true})
    todos: Array<TodoAcademyDto>
}

export const taskSchemas = {
    Gym: {
        dto:CreateTodoGymDto,
        subDto: TodoGymDto
    },
    Academy: {
        dto: CreateTodoAcademyDto,
        subDto: TodoAcademyDto
    }
}