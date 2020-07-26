import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  getCurrentWeek() {
    let currDate = new Date;
    let currentWeek = [];
    for (let i = 0; i <= 6; i++) {
      let first = currDate.getDate() - currDate.getDay() + i;
      let day = new Date(currDate.setDate(first)).toISOString().slice(0, 10);
      currentWeek.push(day.split("-")[2]);
    }
    return currentWeek;
  }

}
