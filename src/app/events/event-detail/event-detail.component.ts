import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../interfaces/event.interface';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() event: Event;
  @Output() attendedEvent: EventEmitter<any> = new EventEmitter<any>();

  attendedEventButtonClicked() {
    const result = {
      id: this.event.id,
      attendedEvent: !this.event.attendedEvent,
    };
    this.attendedEvent.emit(result);
  }
}
