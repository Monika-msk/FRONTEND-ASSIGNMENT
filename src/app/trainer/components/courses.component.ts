import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  template: `
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <h3>Courses</h3>
        <button class="button" routerLink="/trainer/courses/new">New course</button>
      </div>
      <ul>
        <li *ngFor="let c of courses"> <strong>{{c.title}}</strong> - {{c.description}}</li>
      </ul>
    </div>
  `
})
export class CoursesComponent implements OnInit{
  courses: any[] = [];
  constructor(private cs: CourseService){}
  ngOnInit(){ this.cs.getCourses().subscribe(c=>this.courses=c); }
}
