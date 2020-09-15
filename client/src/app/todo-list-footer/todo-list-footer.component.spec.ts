import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from '../todo';

import { TodoListFooterComponent } from './todo-list-footer.component';

describe('TodoListFooterComponent', () => {
  let component: TodoListFooterComponent;
  let fixture: ComponentFixture<TodoListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListFooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListFooterComponent);
    component = fixture.componentInstance;
    component.todos = [new Todo(1, 'Test', false)];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
