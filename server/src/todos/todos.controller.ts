import { Controller, Get, Post } from '@nestjs/common';

@Controller('todos')
export class TodosController {
  @Get()
  findAll(): string {
    return 'Returns all Todos.';
  }
  @Post()
  create(): string {
    return 'Adds a new Todo';
  }
}
