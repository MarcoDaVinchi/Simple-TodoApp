import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiMockService {
  constructor() {}

  public getAllTodos(): Observable<Todo[]> {
    return of([new Todo(1, 'Read article', false)]);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return of(new Todo(1, 'Read article', false));
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return of(new Todo(1, 'Read article', false));
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return of(new Todo(1, 'Read article', false));
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return null;
  }
}
