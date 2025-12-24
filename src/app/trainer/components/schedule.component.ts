import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';

@Component({
  template: `
    <div class="card">
      <h3>Schedule</h3>
      <div style="display:flex;gap:12px">
        <div style="flex:1">
          <div class="small">Upcoming sessions</div>
          <ul>
            <li *ngFor="let s of sessions">{{s.title}} — {{s.date | date:'short'}}</li>
          </ul>
        </div>
        <div style="width:320px">
          <h4>Create session</h4>
          <form (ngSubmit)="create()">
            <div class="form-field"><label>Title</label><input class="input" [(ngModel)]="title" name="title" required/></div>
            <div class="form-field"><label>Date</label><input type="datetime-local" class="input" [(ngModel)]="date" name="date" required/></div>
            <button class="button" type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  `
})
export class ScheduleComponent implements OnInit{
  sessions: any[] = []; title=''; date='';
  constructor(private ss: ScheduleService){}
  ngOnInit(){ this.ss.getSessions().subscribe(s=>this.sessions=s); }
  create(){ if(!this.title || !this.date) return; this.ss.createSession({title:this.title,date:this.date,courseId:''}).subscribe(s=>{this.sessions.push(s);this.title='';this.date='';}); }
}
