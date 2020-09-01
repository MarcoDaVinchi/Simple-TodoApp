import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Simple ToDo app';
  tasks = [
    new Todo(1, 'learn HTML', false),
    new Todo(2, 'learn CSS', false),
    new Todo(3, 'learn JavaScript', false),
    new Todo(4, 'learn PHP', false),
    new Todo(5, 'stay alive!', false),
  ];
}
