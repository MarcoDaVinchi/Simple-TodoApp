import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos: Todo[] = [];
  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route.data.pipe(map((data) => data['todos'])).subscribe((todos) => {
      this.todos = todos;
    }
    );
  }

  onAddTodo(todo: Todo): void {
    this.todoDataService.addTodo(todo).subscribe((newTodo) => {
      this.todos = this.todos.concat(newTodo);
    });
  }

  onToggleTodoComplete(todo: Todo): void {
    this.todoDataService.toggleTodoComplete(todo).subscribe((updatedTodo) => {
      todo = updatedTodo;
    });
  }

  onRemoveTodo(todo: Todo): void {
    this.todoDataService.deleteTodoById(todo.id).subscribe((_) => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }
}
