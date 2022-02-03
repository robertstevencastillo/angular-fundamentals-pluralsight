export interface EventLocation {
  address: string;
  city: string;
  country: string;
}

export interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  location?: EventLocation;
  onlineUrl?: string;
  attendedEvent: boolean;
}
