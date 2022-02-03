import { Component, OnInit, Input } from '@angular/core';
import { EventLocation } from '../../../interfaces/event.interface';

@Component({
  selector: 'app-event-detail-location',
  templateUrl: './event-detail-location.component.html',
  styleUrls: ['./event-detail-location.component.css'],
})
export class EventDetailLocationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() eventLocation: EventLocation;
}
