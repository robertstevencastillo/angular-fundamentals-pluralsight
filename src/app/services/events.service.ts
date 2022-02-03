import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event.interface';

@Injectable()
export class EventsService {
  private events: Event[] = [
    {
      id: 1,
      name: 'Angular Connect',
      date: '9/26/2036',
      time: '10am',
      location: { address: '1 London Rd', city: 'London', country: 'England' },
      attendedEvent: false,
    },
    {
      id: 2,
      name: 'ng-nl',
      date: '4/15/2037',
      time: '9am',
      onlineUrl: 'https://www.ng-conf.org/',
      attendedEvent: false,
    },
    {
      id: 3,
      name: 'ng-conf 2037',
      date: '4/15/2037',
      time: '9am',
      location: {
        address: 'The Palatial America Hotel',
        city: 'Salt Lake City',
        country: 'USA',
      },
      attendedEvent: false,
    },
    {
      id: 4,
      name: 'UN Angular Summit',
      date: '6/10/2037',
      time: '8am',
      onlineUrl: 'http://unangularsummit.org',
      attendedEvent: false,
    },
  ];

  get eventsList() {
    return this.events;
  }
}
