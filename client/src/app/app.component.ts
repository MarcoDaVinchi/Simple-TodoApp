import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Simple ToDo app';
  clickMessage = '123';
  // tasks = [];
  tasks = [
    new Task(1, 'learn HTML', 'learn HTML!'),
    new Task(2, 'learn CSS', 'learn CSS!'),
    new Task(3, 'learn JavaScript', 'learn JavaScript!'),
    new Task(4, 'learn PHP', 'learn PHP!'),
    new Task(5, 'stay alive!', 'stay alive!!!'),
  ];
}
