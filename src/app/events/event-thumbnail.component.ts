import {Component, Input, Output} from '@angular/core'
import { EventEmitter } from '@angular/core';
@Component({
selector:'event-thumbnail',
template:`
<div>
    <!--<h1> Upcoming Angular Event </h1>-->
    
    
    <div class="well hoverwell thumbnail">
    <!-- <h2> {{event?.name}} </h2>  One way binding-->
    <!--<h2> {{event?.name}} </h2> <!-- Add ? to handle null values -->
     <h2> {{event?.name}} </h2>
     <div>Date:{{event?.date}}</div>
     <!--<div [class.green]="event?.time ==='8:00 am'" [ngSwitch]="event?.time">-->
     <div [style.color]="event?.time === '8:00 am' ? '#003300' : '#bbb'" [ngSwitch]="event?.time">
     <!--<div [ngClass]= "getStarTimeClass2()" [ngSwitch]="event?.time">-->
     Time:{{event?.time}}
     
     <span *ngSwitchCase="'8:00 am'"> Early Start </span>
     <span *ngSwitchCase="'10:00 am'"> Late Start</span>
     <span *ngSwitchDefault> Normal Start</span>
     </div>
     <div>Price:\${{event?.price}} </div>
     
     <!-- <div *ngIf="event?.location">  -->
     <div [hidden]="!event?.location">
     <span>Location: {{event?.location?.address}}</span>
     
     <span class="pad-left">{{event?.location?.city}} {{event?.location?.country}}</span>
    </div>
    <button class="btn btn-primary" (click)="handleClickMe()"> Click Me! </button>
    </div>
    </div>
    
`,
styles:[`
.green {color: #003300 !important}
.bold {font-weight:bold;}
.thumbnail {min-height:210px;}
.pad-left{margin-left:10px;}
.well div{color:#bbb;}

`]
})
 
export class EventThumbnailComponent{
@Input() event:any
@Output() eventClick=new EventEmitter()
handleClickMe(){
    this.eventClick.emit(this.event.name)
}
somename:any="Bhupender singh"
logfoo(){
    console.log('log foo');
}

myfun1(){
    alert('called here');
}

getStarTimeClass(){
    const isEarlyStart=this.event && this.event.time=== '8:00 am'
    return {green:isEarlyStart,bold:isEarlyStart,mkt:isEarlyStart}
}

getStarTimeClass2(){
   if(this.event && this.event.time=== '8:00 am')
        return ['green','bold']
    return []
}
// We can call any of the above function, both are valid here  
}