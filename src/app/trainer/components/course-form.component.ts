import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';

@Component({
  template: `
    <div class="card" style="max-width:720px">
      <h3>Create Course</h3>
      <form [formGroup]="form" (ngSubmit)="submit()">
        <div class="form-field">
          <label>Name</label>
          <input class="input" formControlName="title" />
          <div class="small" *ngIf="form.controls.title.invalid && form.controls.title.touched">Name is required</div>
        </div>
        <div class="form-field">
          <label>Description</label>
          <textarea class="input" formControlName="description"></textarea>
        </div>
        <div style="display:flex;gap:8px">
          <button class="button" type="submit" [disabled]="form.invalid">Create</button>
          <button class="button" type="button" (click)="cancel()" style="background:#6b7280">Cancel</button>
        </div>
      </form>
    </div>
  `
})
export class CourseFormComponent {
  form = this.fb.group({ title: ['', Validators.required], description: [''] });
  constructor(private fb: FormBuilder, private cs: CourseService, private router: Router){}
  submit(){ if(this.form.valid){ this.cs.createCourse(this.form.value).subscribe(()=>this.router.navigate(['/trainer/courses'])); } }
  cancel(){ this.router.navigate(['/trainer/courses']); }
}
