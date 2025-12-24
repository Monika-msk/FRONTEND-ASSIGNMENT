import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';

@Component({
  template: `
    <div class="card">
      <h3>Student Analytics</h3>
      <ul>
        <li *ngFor="let s of students">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div>{{s.name}}</div>
            <div style="width:40%">
              <div class="analytics-bar"><div [style.width.%]="s.score"></div></div>
            </div>
            <div>{{s.score}}%</div>
          </div>
        </li>
      </ul>
    </div>
  `
})
export class AnalyticsComponent implements OnInit{
  students: any[] = [];
  constructor(private as: AnalyticsService){}
  ngOnInit(){ this.as.getStudents().subscribe(s=>this.students=s); }
}
