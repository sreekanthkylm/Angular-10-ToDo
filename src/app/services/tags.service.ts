import { Injectable } from '@angular/core';
import { Tagitem } from '../../app/models/tag-item';
import { MatChipInputEvent } from '@angular/material/chips';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  tagItems: Tagitem[] = [];

  constructor() { }

  addChips(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.tagItems.push({ name: value.trim() });
    }
    if (input) {
      input.value = '';
    }
    return this.tagItems;
  }

  removeChips(tagitem: Tagitem) {
    const index = this.tagItems.findIndex(i => i.name === tagitem.name);
    if (index >= 0) {
      this.tagItems.splice(index, 1);
    }
    return this.tagItems;
  }
}
