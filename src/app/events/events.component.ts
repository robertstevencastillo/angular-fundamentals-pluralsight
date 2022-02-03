import { Component, OnInit } from '@angular/core';
import { Event } from '../interfaces/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  event1: Event = {
    name: 'ngConf 2025',
    date: '3/1/2025',
    time: '11am',
    location: {
      address: '123 Main St',
      city: 'Salt Lake City, UT',
      country: 'USA',
    },
    attendedEvent: false,
  };

  handleAttendedEventClick(result: boolean) {
    this.event1.attendedEvent = result;
  }
}
