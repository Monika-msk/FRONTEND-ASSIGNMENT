import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  template: `
    <div class="grid">
      <div class="card">
        <h3>Quick actions</h3>
        <div style="display:flex;gap:8px">
          <button class="button" routerLink="/trainer/courses">Manage courses</button>
          <button class="button" routerLink="/trainer/schedule">Schedule session</button>
        </div>
      </div>
      <div class="card">
        <h3>Your courses</h3>
        <ul>
          <li *ngFor="let c of courses">{{c.title}}</li>
        </ul>
      </div>
      <div class="card">
        <h3>Student metrics</h3>
        <div class="small">Avg score: {{avgScore}}</div>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit{
  courses: any[] = [];
  avgScore = '-';
  constructor(private cs: CourseService){ }
  ngOnInit(){ this.cs.getCourses().subscribe(c=>this.courses=c); }
}
