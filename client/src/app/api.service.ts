import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Todo } from './todo';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //API: GET /todos
  public getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL + '/todos');
  }

  //API: POST /todos
  public createTodo(todo: Todo) {}

  //API: GET /todos/:id
  public getTodoById(todoId: number) {}

  // API: PUT /todos/:id
  public updateTodo(todo: Todo) {}

  // API: DELETE /todos/:id
  public deleteTodoById(todoId: number) {}
}
