import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class CourseService{
  constructor(private http: HttpClient){ }
  getCourses(): Observable<any[]> { return this.http.get<any[]>('/api/courses'); }
  createCourse(payload:any){ return this.http.post('/api/courses', payload); }
}
