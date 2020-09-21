import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  todoCompleted: string;

  toggleTodoComplete(todo: Todo): void {
    this.toggleComplete.emit(todo);
    this.todoCompleted = this.todoCompleted ? '' : 'completed';
  }
  removeTodo(todo: Todo): void {
    this.remove.emit(todo);
  }

  ngOnInit(): void {}
}
