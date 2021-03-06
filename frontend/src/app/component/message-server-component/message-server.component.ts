import { Component } from '@angular/core';
import { MessageComponent } from '../messages-component/messages.component';
import { NewMessageComponent } from '../messages-component/new-message.component'
import{ NavComponent } from '../nav-component/nav.component';
import { WebService } from '../../services/web.service';

// <new-message></new-message>
//             <messages></messages>
@Component({
  selector: 'group',
  template: `
  
  <mat-card class="card"  [routerLink]="['/board']" >
 
  <mat-card-title >
  <h1>Global Group</h1>
   </mat-card-title>
  <mat-card-content></mat-card-content>
    `,
  styleUrls: ['./message.component.css']
})
export class MessageServerComponent {
    constructor (public  webService : WebService){}
     
 }
