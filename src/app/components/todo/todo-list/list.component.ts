import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../../models/todo-item';
import { TodoListService } from '../../../services/todo-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todoList: TodoItem[];

  constructor(private todoListService: TodoListService, private router: Router) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  createList() {
    this.router.navigate(['/manage-list']);
  }
}
