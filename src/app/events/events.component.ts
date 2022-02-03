import { Component, OnInit } from '@angular/core';
import { Event } from '../interfaces/event.interface';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  private _eventsService: EventsService;
  public events: Event[] = [];

  constructor(eventsService: EventsService) {
    this._eventsService = eventsService;
  }

  ngOnInit() {
    this.events = this._eventsService.eventsList;
  }

  handleAttendedEventClick(result: any) {
    const eventToUpdateIndex = this.events.findIndex((e) => e.id === result.id);

    this.events[eventToUpdateIndex] = {
      ...this.events[eventToUpdateIndex],
      attendedEvent: result.attendedEvent,
    };
  }
}
