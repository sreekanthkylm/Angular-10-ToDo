import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from './../../../models/todo-item';
import { Router } from '@angular/router';
import { TodoListService } from '../../../services/todo-list.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: TodoItem;
  @Input() itemindex: number;

  constructor(private todoListService: TodoListService, private router: Router) { }

  ngOnInit(): void {
  }

  viewItem(itemindex: number): void {
    this.router.navigate(['/manage-list', itemindex]);
  }

  deleteItem(item: TodoItem): void {
    this.todoListService.deleteItem(item);
  }
}
