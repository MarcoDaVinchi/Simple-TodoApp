import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {

  newTodo: Todo = new Todo();
  constructor(private todoDataService: TodoDataService) {}

  onAddTodo(todo: Todo): void {
    this.todoDataService.addTodo(todo);
  }

  onToggleTodoComplete(todo: Todo): void {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo: Todo): void {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos(): Todo[] {
    return this.todoDataService.getAllTodos();
  }
}
