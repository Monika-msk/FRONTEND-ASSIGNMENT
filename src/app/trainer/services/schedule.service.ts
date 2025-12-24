import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({providedIn:'root'})
export class ScheduleService{
  constructor(private http: HttpClient){}
  getSessions(){ return this.http.get<any[]>('/api/sessions'); }
  createSession(payload:any){ return this.http.post('/api/sessions', payload); }
}
