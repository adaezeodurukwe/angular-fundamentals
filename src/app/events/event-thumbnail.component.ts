import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>TIme: {{event.time}}</div>
        <div>Ticket: \${{event.tickets}}</div>
        <div>
            <span>Date: {{event.location.address}}</span>
            <span>&nbps</span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div>
    `
})
export default class EventTHumbnailComponent {
    @Input() event:any
}