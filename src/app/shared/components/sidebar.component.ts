import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-sidebar',
  template: `
    <aside class="sidebar">
      <h3>Menu</h3>
      <a routerLink="/trainer" class="nav-link">Dashboard</a>
      <a routerLink="/trainer/courses" class="nav-link">Courses</a>
      <a routerLink="/trainer/analytics" class="nav-link">Analytics</a>
      <a routerLink="/trainer/schedule" class="nav-link">Schedule</a>
      <a routerLink="/trainer/notifications" class="nav-link">Notifications</a>
      <div style="margin-top:16px" *ngIf="auth.isAdmin()">
        <strong>Admin</strong>
        <a routerLink="/admin" class="nav-link">Admin Module</a>
      </div>
    </aside>
  `
})
export class SidebarComponent { constructor(public auth: AuthService){} }
