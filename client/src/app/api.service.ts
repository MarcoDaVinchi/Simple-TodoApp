import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, concat, of } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Todo } from './todo';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  //API: GET /todos
  public getAllTodos() {
    return this.http.get<Todo[]>(API_URL + '/todos').pipe(
      map((res) => {
        return res.map((todo) => new Todo(todo.id, todo.title, todo.complete));
      }),
      retry(3),
      catchError(this.handleError)
    );
  }

  //API: POST /todos
  public createTodo(todo: Todo) {}

  //API: GET /todos/:id
  public getTodoById(todoId: number) {}

  // API: PUT /todos/:id
  public updateTodo(todo: Todo) {}

  // API: DELETE /todos/:id
  public deleteTodoById(todoId: number) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}.` + `body was: ${error.error}`
      );
    }
    return throwError('SOmething bad happened: please try again later.');
  }
}
