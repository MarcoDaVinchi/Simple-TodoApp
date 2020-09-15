import { TestBed } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ApiService,
          useClass: ApiMockService,
        },
      ],
    });
    service = TestBed.inject(TodoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
