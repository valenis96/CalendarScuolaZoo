import { Component, OnInit } from '@angular/core';
import {  CalendarView } from 'angular-calendar';

@Component({
  selector: 'my-cal',
  templateUrl: './my-cal.component.html',
  styleUrls: ['./my-cal.component.css']
})
export class MyCalComponent implements OnInit{
  selected: Date | undefined;
  formats = [
    {value: 'day', viewValue: 'day'},
    {value: 'week', viewValue: 'week'},
    {value: 'month', viewValue: 'month'},
  ];
  selectedFormat=this.formats[0].viewValue;

  viewDate: Date = new Date();

  CalendarView = CalendarView;
  ngOnInit():void{
    console.log(this.selectedFormat);
  }
}
