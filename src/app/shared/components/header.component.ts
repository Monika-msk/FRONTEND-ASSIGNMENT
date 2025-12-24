import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { NotificationService } from '../../trainer/services/notification.service';

@Component({
  selector: 'app-header',
  template: `
    <div style="display:flex;gap:12px;align-items:center">
      <div class="small">Role: <strong>{{auth.role}}</strong></div>
      <div class="small">🔔 <strong>{{count}}</strong></div>
      <button class="button" (click)="logout()">Logout</button>
    </div>
  `
})
export class HeaderComponent implements OnInit{
  count = 0;
  constructor(public auth: AuthService, private router: Router, private ns: NotificationService){}
  ngOnInit(){ this.ns.get().subscribe(n=>this.count = n.length); }
  logout(){ localStorage.removeItem('faculty_portal_role'); this.router.navigate(['/login']); }
}
