import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-shell">
      <app-sidebar></app-sidebar>
      <div class="main">
        <div class="header">
          <div><strong>Faculty Portal</strong></div>
          <div><app-header></app-header></div>
        </div>
        <div style="margin-top:16px"><router-outlet></router-outlet></div>
      </div>
    </div>
  `
})
export class AppComponent { }
