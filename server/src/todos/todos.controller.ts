import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Todo } from '../todo';
import { CreateTodosDto } from '../create-todos.dto';

const todosMock: Todo[] = [
  {
    id: 1,
    title: 'Read SitePoint article',
    complete: false,
  },
  {
    id: 2,
    title: 'Clean inbox',
    complete: false,
  },
  {
    id: 3,
    title: 'Make restaurant reservation',
    complete: false,
  },
];
@Controller('todos')
export class TodosController {
  @Get()
  findAll(): Observable<Todo[]> {
    return of(todosMock);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Observable<Todo> {
    return of(todosMock[id - 1]);
  }

  @Post()
  async create(@Body() todo: CreateTodosDto) {
    todosMock.push(todo);
    return of(todo);
  }
}
