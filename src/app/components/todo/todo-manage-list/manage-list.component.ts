import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { formatDate } from '@angular/common';
import { TodoItem } from '../../../models/todo-item';
import { Tagitem } from '../../../models/tag-item';
import { TodoListService } from '../../../services/todo-list.service';
import { CalendarService } from '../../../services/calendar.service';
import { TagsService } from '../../../services/tags.service';

@Component({
  selector: 'app-manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['./manage-list.component.scss'],
})
export class ManageListComponent implements OnInit {

  /*chips variables*/
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  chipsShow = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tagItems: Tagitem[] = [];
  /*calendar Variables*/
  weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  currentDate;
  currentMonth;
  currentWeek = [];
  /*todo Variables*/
  todoTitle: string = 'Design';
  toDoItemModel: TodoItem = { dateTime: '' };
  editEnabled: boolean = false;
  itemIndex: string;

  constructor(private todoListService: TodoListService, private calenderService: CalendarService, private tagsService: TagsService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params["id"]) {
        this.editItem(params["id"]);
        this.itemIndex = params["id"];
      }
    });
  }

  ngOnInit() {
    this.createCalendar();
  }

  createCalendar() {
    this.currentMonth = formatDate(new Date(), 'MMMM', 'en');
    this.currentDate = formatDate(new Date(), 'dd', 'en');
    this.currentWeek = this.calenderService.getCurrentWeek();
  }

  showChips() {
    this.chipsShow = true;
  }

  addChips(event) {
    this.tagItems = this.tagsService.addChips(event);
  }

  removeChips(tagitem) {
    this.tagItems = this.tagsService.removeChips(tagitem);
  }

  editItem(index) {
    this.toDoItemModel = this.todoListService.readItem(index - 1);
    if (typeof this.toDoItemModel !== 'undefined') {
      this.editEnabled = true;
      this.todoTitle = 'Re-design';
      if (this.toDoItemModel.tags.length > 0) {
        this.tagItems = this.toDoItemModel.tags;
        this.showChips();
      }
    }
    else {
      this.backToList();
    }
  }

  backToList() {
    this.router.navigate(['/list']);
  }

  onSubmit() {
    this.toDoItemModel.dateTime = formatDate(new Date(), 'y/M/d aaaaa\'m\'h:mm ', 'en');
    this.toDoItemModel.tags = this.tagItems;
    if (this.editEnabled) {
      this.todoListService.updateItem(this.itemIndex, this.toDoItemModel);
    }
    else {
      this.todoListService.createItem(this.toDoItemModel);
    }
    this.router.navigate(['/list']);
  }
}
