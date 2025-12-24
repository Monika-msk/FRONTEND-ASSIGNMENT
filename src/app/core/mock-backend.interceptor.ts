import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { Course, StudentPerformance, Session, Notification } from './models';

const MOCK = {
  courses: [
    { id: 'c1', title: 'Intro to Angular', description: 'Components, modules, routing' },
    { id: 'c2', title: 'Advanced TypeScript', description: 'Types, generics, advanced patterns' }
  ] as Course[],
  students: [
    { studentId: 's1', name: 'Alice', score: 85 },
    { studentId: 's2', name: 'Bob', score: 72 },
    { studentId: 's3', name: 'Carla', score: 91 }
  ] as StudentPerformance[],
  sessions: [
    { id: 'sess1', courseId: 'c1', title: 'Kickoff', date: new Date().toISOString() }
  ] as Session[],
  notifications: [
    { id: 'n1', message: 'New student joined Intro to Angular', read: false, time: new Date().toISOString() }
  ] as Notification[]
};

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // simulate api
    return of(null).pipe(mergeMap(() => {
      const { url, method, body } = req;

      // courses
      if (url.endsWith('/api/courses') && method === 'GET') {
        return of(new HttpResponse({ status: 200, body: MOCK.courses.slice() }));
      }
      if (url.endsWith('/api/courses') && method === 'POST') {
        const course = { id: 'c' + (MOCK.courses.length + 1), ...body };
        MOCK.courses.push(course);
        return of(new HttpResponse({ status: 201, body: course }));
      }

      // analytics
      if (url.endsWith('/api/students') && method === 'GET') {
        return of(new HttpResponse({ status: 200, body: MOCK.students.slice() }));
      }

      // sessions
      if (url.endsWith('/api/sessions') && method === 'GET') {
        return of(new HttpResponse({ status: 200, body: MOCK.sessions.slice() }));
      }
      if (url.endsWith('/api/sessions') && method === 'POST') {
        const s = { id: 'sess' + (MOCK.sessions.length + 1), ...body };
        MOCK.sessions.push(s);
        return of(new HttpResponse({ status: 201, body: s }));
      }

      // notifications
      if (url.endsWith('/api/notifications') && method === 'GET') {
        return of(new HttpResponse({ status: 200, body: MOCK.notifications.slice() }));
      }

      // pass through
      return next.handle(req);
    }))
    .pipe(delay(300));
  }
}
