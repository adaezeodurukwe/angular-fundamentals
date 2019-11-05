import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventListComponent {
    event1 = {
        id: 1,
        name: 'Angular connect',
        date: '9/26/2009',
        time: '10 am',
        tickets: 100,
        location: {
          address: 'no 45',
          city: 'ikom',
          country: 'England'
        }
    }
}