export interface EventLocation {
  address: string;
  city: string;
  country: string;
}

export interface Event {
  name: string;
  date: string;
  time: string;
  location: EventLocation;
  attendedEvent: boolean;
}
