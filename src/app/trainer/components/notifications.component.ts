import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  template: `
    <div class="card">
      <h3>Notifications</h3>
      <ul class="notifications-list">
        <li *ngFor="let n of notifications">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div>
              <div><strong>{{n.message}}</strong></div>
              <div class="small">{{n.time | date:'short'}}</div>
            </div>
            <div>
              <button class="button" style="background:#10b981" (click)="markRead(n)">Mark read</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `
})
export class NotificationsComponent implements OnInit {
  notifications: any[] = [];
  constructor(private ns: NotificationService){}
  ngOnInit(){ this.ns.get().subscribe(n=>this.notifications=n); }
  markRead(n:any){ n.read = true; }
}
