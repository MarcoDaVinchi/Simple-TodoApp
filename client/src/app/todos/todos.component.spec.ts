import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ApiMockService } from '../api-mock.service';
import { ApiService } from '../api.service';
import { TodoDataService } from '../todo-data.service';

import { TodosComponent } from './todos.component';
import { of } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TodosComponent],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          TodoDataService,
          {
            provide: ApiService,
            useClass: ApiMockService,
          },
          {
            provide: ActivatedRoute,
            useValue: {
              data: of({
                todos: [],
              }),
            },
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
