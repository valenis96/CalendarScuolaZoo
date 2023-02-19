import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogEventComponent } from 'src/dialog-event/dialog-event.component';

import { Observable } from 'rxjs';
import { EventItem } from 'src/store/models/eventItem.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/models/state.model';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'my-cal',
  templateUrl: './my-cal.component.html',
  styleUrls: ['../style/my-cal.component.css']
})
export class MyCalComponent implements OnInit{
  selected: Date | undefined;
  formats = [
    {value: 'day', viewValue: 'day'},
    {value: 'week', viewValue: 'week'},
    {value: 'month', viewValue: 'month'},
  ];
  selectedFormat=this.formats[2].viewValue;
  viewDate: Date = new Date();
  eventItems$: Observable<EventItem[]> | undefined;

  eventTitle: string = '';
  description: string = '';
  start: Date | undefined;

  events= []

  constructor(
    public dialog: MatDialog, 
    private store: Store<AppState>
  ) {}

  ngOnInit():void{
   this.eventItems$ = this.store.select('events');
  }

  openDialog(selected: Date | undefined): void {
    if (selected){
      const dialogRef = this.dialog.open(DialogEventComponent, {
        data: {date: this.selected, title: this.eventTitle, description: this.description, time: this.start},
      });

      dialogRef.afterClosed().subscribe(result => {
        const hours = result.time.split(':')[0];
        const minutes = result.time.split(':')[1];
        let start = new Date(result.date.setHours(hours));
        start = new Date(start.setMinutes(minutes));
        this.events.push({...result, start})
      });
    }
  }

  changeView():void {
    this.selectedFormat=this.formats[2].viewValue;
  }

}
