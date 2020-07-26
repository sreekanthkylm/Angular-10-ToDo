import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList = [
  { title: 'Painting a illustration.', content: '', tags: [{ name: 'PRD' }], dateTime: '2018/9/17 pm9.00' },
  { title: 'Draw its user interface.', content: '', tags: [{ name: '100day' }], dateTime: '2018/9/15 pm11.00' },
  { title: 'Taobo maker festival.', content: '', tags: [{ name: 'Taobao' }], dateTime: '2018/9/16 am12.00' },
  { title: 'Pathetique |||', content: '', tags: [{ name: 'Piano' }], dateTime: '2018/9/15 pm9.00' },
  { title: 'Dua lipa Shanghai debut.', content: '', tags: [{ name: 'Show' }], dateTime: '2018/9/17 pm9.00' },
  { title: 'Instrument recording, mixing.', content: '', tags: [{ name: 'Ideas' }], dateTime: '2018/9/15 pm11.00' },
];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: TodoItem[];

  constructor(private storageService: StorageService) {
  }

  getTodoList() {
    this.todoList = this.storageService.getData(todoListStorageKey) || defaultTodoList
    return this.todoList;
  }

  saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  createItem(item: TodoItem) {
    this.todoList.push(item);
    this.saveList();
  }

  readItem(index) {
    if(this.todoList[index])
    return this.todoList[index];
  }

  updateItem(itemindex, item: TodoItem) {
    this.todoList[itemindex - 1] = item;
    this.saveList();
  }

  deleteItem(item: TodoItem) {
    console.log("in");
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
}
