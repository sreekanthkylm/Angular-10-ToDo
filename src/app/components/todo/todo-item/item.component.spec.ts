import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemComponent } from './item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { TodoListService } from '../../../services/todo-list.service';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let router = { navigate: jasmine.createSpy('navigate') };
  let todoListService: TodoListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent],
      imports: [RouterTestingModule, MatCardModule],
      providers: [{ provide: Router, useValue: router }, TodoListService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    todoListService = TestBed.get(TodoListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to manage-list page with itemindex when item is clicked', () => {
    let id = 1;
    component.viewItem(id);
    expect(router.navigate).toHaveBeenCalledWith(['/manage-list', 1]);
  });

  it('should call delete item when delete button clicked', () => {
    let item = { title: 'Painting a illustration.', content: '', tags: [{ name: '' }], dateTime: '2020/6/30 pm9:11' };
    const mySpy = spyOn(todoListService, 'deleteItem');
    component.deleteItem(item);
    expect(mySpy).toHaveBeenCalledTimes(1);
  });
});
