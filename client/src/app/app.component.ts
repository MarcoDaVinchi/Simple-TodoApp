import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoDataService: TodoDataService) {}

  public ngOnInit() {
    this.todoDataService.getAllTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  onAddTodo(todo: Todo): void {
    this.todoDataService.addTodo(todo);
  }

  onToggleTodoComplete(todo: Todo): void {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo: Todo): void {
    this.todoDataService.deleteTodoById(todo.id);
  }
}
