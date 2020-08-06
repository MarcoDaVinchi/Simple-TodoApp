import { Component } from '@angular/core';
import { Task } from "./task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Simple ToDo app';
  // tasks = [];
  tasks = [
    new Task(1, 'learn HTML', 'learn HTML fast!'),
    new Task(2, 'learn CSS', 'learn CSS fast!'),
    new Task(3, 'learn JavaScript', 'learn JavaScript fast!'),
    new Task(4, 'learn PHP', 'learn PHP fast!'),
    new Task(5, 'stay alive!', 'stay alive! fast!'),
  ];
}
