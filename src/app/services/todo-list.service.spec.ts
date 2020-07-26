import { TestBed, inject } from '@angular/core/testing';
import { TodoListService } from './todo-list.service';
import { StorageService } from './storage.service';

class MockStorageservice {
  getData(key) {
    return { key: 'testProp', data: 'testValue ' };
  }
  setData() {
    return {}
  }
}

describe('TodoListService', () => {
  let service: TodoListService;
  let mockStorageservice: MockStorageservice;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListService, { provide: StorageService, useValue: MockStorageservice }]
    });
    service = TestBed.inject(TodoListService);
  });

  it('should be created', inject([TodoListService], (service: TodoListService) => {
    expect(service).toBeTruthy();
  }));
});
