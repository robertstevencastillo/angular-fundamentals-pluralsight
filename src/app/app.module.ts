import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventDetailLocationComponent } from './events/event-detail/event-detail-location/event-detail-location.component';

import { EventsService } from './services/events.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    EventsComponent,
    EventDetailComponent,
    EventDetailLocationComponent,
  ],
  providers: [EventsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
