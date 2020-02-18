import {Component } from '@angular/core'
import { EventService } from './shared/event.service';
@Component ({
    selector:'events-list',
    template:`
    <div>
    <!--<h1>Upcoming Angular Event </h1>-->
    <hr/>
    
    <!--<event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail> -->
   <!-- <event-thumbnail #thumbnail [event]="event1"></event-thumbnail> -->
   <div class="row">
   <div *ngFor="let event of events" class="col-md-5">
   <event-thumbnail  [event]="event"></event-thumbnail> 
   </div>
   </div>
<!--<h3>{{thumbnail.somename}}</h3>-->
    <button class="btn btn-primary" (click)="thumbnail.logfoo()"> Log me foo</button>

    </div>
    `

})


export class EventsListComponent{
    events:any[]
constructor(private eventservice:EventService){
this.events=this.eventservice.getEvents()
}

//handleEventClicked(data){
//console.log('Recieved :',data)
//}

}