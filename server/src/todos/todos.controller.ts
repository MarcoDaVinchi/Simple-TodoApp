import { Controller, Get, Post } from '@nestjs/common';
import { Todo } from '../todo';


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
  findAll(): Todo[] {
    return todosMock;
  }
  @Post()
  create(): string {
    return 'Adds a new Todo';
  }
}
