import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListComponent } from './list.component';
import { Router } from '@angular/router';
import { ItemComponent } from './../todo-item/item.component';
import { MatCardModule } from '@angular/material/card';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let router = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, ItemComponent],
      imports: [RouterTestingModule, MatCardModule],
      providers: [{ provide: Router, useValue: router }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to manage-list page when add button is clicked', () => {
    component.createList();
    expect(router.navigate).toHaveBeenCalledWith(['/manage-list']);
  });
});
