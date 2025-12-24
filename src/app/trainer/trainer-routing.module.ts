import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { CoursesComponent } from './components/courses.component';
import { CourseFormComponent } from './components/course-form.component';
import { AnalyticsComponent } from './components/analytics.component';
import { ScheduleComponent } from './components/schedule.component';
import { NotificationsComponent } from './components/notifications.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/new', component: CourseFormComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'notifications', component: NotificationsComponent }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class TrainerRoutingModule {}
