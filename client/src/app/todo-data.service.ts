import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  lastId = 0;
  todos: Todo[] = [];

  constructor(private api: ApiService) {}

  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, title: string, complete: boolean): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    todo.title = title;
    todo.complete = complete;
    return todo;
  }

  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  getTodoById(id: number): Todo {
    return this.todos.filter((todo) => todo.id === id).pop();
  }

  toggleTodoComplete(todo: Todo): Todo {
    const updatedTodo = this.updateTodoById(
      todo.id,
      todo.title,
      (todo.complete = !todo.complete)
    );
    return updatedTodo;
  }
}
