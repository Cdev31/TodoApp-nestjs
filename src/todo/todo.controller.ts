import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/todos.dto';
import { MongoDBError } from 'src/common/filters/MongooseError.filter';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodo) {  
      return this.todoService.create(createTodo);   
    }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  @UseFilters(new MongoDBError())
  findOne(@Param('id') id: string) {
    return this.todoService.findTodoById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
