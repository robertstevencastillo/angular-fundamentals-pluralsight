import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../interfaces/events';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() event: Event;
  @Output() attendedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  attendedEventButtonClicked() {
    const attendedEvent = !this.event.attendedEvent;
    this.attendedEvent.emit(attendedEvent);
  }
}
