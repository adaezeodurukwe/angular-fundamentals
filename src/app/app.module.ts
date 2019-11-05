import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/events-list.component';
import EventTHumbnailComponent from './events/event-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventTHumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
