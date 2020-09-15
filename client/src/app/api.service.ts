import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHandler,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError, concat, of } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Todo } from './todo';

const API_URL = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  //API: GET /todos
  public getAllTodos() {
    return this.http.get<Todo[]>(`${API_URL}/todos`).pipe(
      map((res) => {
        return res.map((todo) => new Todo(todo.id, todo.title, todo.complete));
      }),
      retry(3),
      catchError(this.handleError)
    );
  }

  //API: POST /todos
  public createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${API_URL}/todos`, todo, httpOptions).pipe(
      map((res) => {
        return new Todo(res.id, res.title, res.complete);
      }),
      catchError(this.handleError)
    );
  }

  //API: GET /todos/:id
  public getTodoById(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(`${API_URL}/todos/${todoId}`).pipe(
      map((res) => {
        return new Todo(res.id, res.title, res.complete);
      }),
      retry(3),
      catchError(this.handleError)
    );
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http
      .put<Todo>(`${API_URL}/todos/${todo.id}`, todo, httpOptions)
      .pipe(
        map((res) => {
          return new Todo(res.id, res.title, res.complete);
        }),
        catchError(this.handleError)
      );
  }

  // API: DELETE /todos/:id
  public deleteTodoById(todoId: number): Observable<null> {
    return this.http.delete(`${API_URL}/todos${todoId}`).pipe(
      map((res) => null),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse | any) {
    console.error('ApiService::ErrorHandler', error);
    return throwError(error);
  }
}
