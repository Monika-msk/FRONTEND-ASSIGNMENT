import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TrainerRoutingModule } from './trainer-routing.module';
import { DashboardComponent } from './components/dashboard.component';
import { CoursesComponent } from './components/courses.component';
import { CourseFormComponent } from './components/course-form.component';
import { AnalyticsComponent } from './components/analytics.component';
import { ScheduleComponent } from './components/schedule.component';
import { NotificationsComponent } from './components/notifications.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, CoursesComponent, CourseFormComponent, AnalyticsComponent, ScheduleComponent, NotificationsComponent],
  imports: [CommonModule, RouterModule, TrainerRoutingModule, SharedModule, ReactiveFormsModule, FormsModule]
})
export class TrainerModule { }
