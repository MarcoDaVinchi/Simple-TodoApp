import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  lastId = 0;
  todos: Todo[] = [];

  constructor() {}

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

  getAllTodos(): Todo[] {
    return this.todos;
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
