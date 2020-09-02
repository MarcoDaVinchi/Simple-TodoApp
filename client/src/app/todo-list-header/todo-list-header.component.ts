import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss'],
})
export class TodoListHeaderComponent implements OnInit {
  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  addTodo(): void {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

  ngOnInit(): void {}
}
