import {  Injectable } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from './dto/todos.dto';
import { Model } from 'mongoose';
import { Todo } from './entities/todo.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TodoService {

  constructor(
    @InjectModel(Todo.name)
    private readonly todoModel: Model<Todo> 
  ){}

  async create(createTodoDto) {
    return await this.todoModel.create(createTodoDto)
  }

  async findAll() {
    const todos = await this.todoModel.find()
    return todos
  }

  async findTodoById(id: string) {
    const oneTodo = await this.todoModel.findById(id)
    return oneTodo
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const updateTodo = await this.todoModel.updateOne({_id: id}, updateTodoDto)
    return updateTodo
  }

  async remove(id: string) {

    const removeTodo = await this.todoModel.deleteOne({_id: id})

    removeTodo.deletedCount > 0 ? true : false
     
  }

}
