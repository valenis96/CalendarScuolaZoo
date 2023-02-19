import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddEventAction } from 'src/store/actions/event.actions';
import { EventItem } from 'src/store/models/eventItem.model';
import { AppState } from 'src/store/models/state.model';


@Component({
  selector: 'app-dialog-event',
  templateUrl: './dialog-event.component.html',
  styleUrls: ['../style/dialog-event.component.css']
})
export class DialogEventComponent implements OnInit {
  eventItems$: Observable<EventItem[]> | undefined;
  date = this.data.date.toDateString();
  @ViewChild('myform', { static:false }) eventForm: NgForm

  constructor(
    public dialogRef: MatDialogRef<DialogEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.eventItems$ = this.store.select('events');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addEvent(): void {
    this.store.dispatch(new AddEventAction({...this.eventForm.value.eventData, date: this.data.date}));
  }
}
