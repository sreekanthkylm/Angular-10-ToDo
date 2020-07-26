import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ManageListComponent } from './manage-list.component';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoListService } from '../../../services/todo-list.service';
import { of } from 'rxjs';
import { TagsService } from '../../../services/tags.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ManageListComponent', () => {
  let component: ManageListComponent;
  let fixture: ComponentFixture<ManageListComponent>;
  let mockRouter = { navigate: jasmine.createSpy('navigate') };
  let todoListService: TodoListService;
  let tagsService: TagsService;
  let todoList = { content: 'somecontent', title: 'sometitle', tags: [{ name: 'sometag' }], dateTime: '' };
  let todoLists = [{ content: 'somecontent', title: 'sometitle', tags: [{ name: 'sometag' }], dateTime: '' }];

  class MockTodoListService {
    readItem() {
      return todoList;
    }
    getTodoList() {
      return todoLists;
    }
    createItem(): void {
    }
    updateItem(): void {
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageListComponent],
      imports: [RouterTestingModule, FormsModule, MatChipsModule, MatFormFieldModule, MatCardModule, BrowserAnimationsModule],
      providers: [{ provide: TodoListService, useClass: MockTodoListService },
      { provide: TagsService },
      { provide: Router, useValue: mockRouter },
      { provide: ActivatedRoute, useValue: { params: of({ id: 1 }) } }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageListComponent);
    component = fixture.componentInstance;
    todoListService = TestBed.get(TodoListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show tags input when click add tags', () => {
    component.showChips()
    expect(component.chipsShow).toBe(true);
  });

  it('should call removeChips when removing tags', () => {
    let tagitemRemoved = { name: 'sometag' };
    component.tagItems = todoList.tags;
    component.removeChips(tagitemRemoved);
    expect(component.tagItems).toEqual([]);
  });

  it('should edit a toditem if item id is present', () => {
    let index = 1;
    var spy = spyOn(todoListService, "readItem").and.callThrough();
    component.editItem(index);
    expect(spy).toHaveBeenCalled();
    expect(component.todoTitle).toEqual('Re-design');
    expect(component.editEnabled).toBe(true);
    expect(component.toDoItemModel).toEqual(todoList);
  });

  it('should navigate to list page when edit item id is not present', () => {
    let index = 15;
    var spy = spyOn(todoListService, "readItem").and.returnValue(undefined);
    component.editItem(index);
    expect(spy).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/list']);
  });

  it('should submit form values for create an item when finish button clicks', () => {
    component.editEnabled = false;
    var spyCreate = spyOn(todoListService, "createItem").and.callThrough();
    component.onSubmit();
    expect(spyCreate).toHaveBeenCalledWith(todoList);
  });

  it('should submit form values for update an item when update button clicks', () => {
    let index=1;
    component.editEnabled = true;
    var spyUpdate = spyOn(todoListService, "updateItem").and.callThrough();
    component.onSubmit();
    expect(spyUpdate).toHaveBeenCalledWith(index,todoList);
  });

  it('should navigate back to list page when update or finish button clicks', () => {
    component.onSubmit();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/list']);
  });

  it('should navigate to list page when back button is clicked', () => {
    component.backToList();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/list']);
  });
});
