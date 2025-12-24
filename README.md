# Faculty / Trainer Management Portal

This is a minimal Angular application scaffold implementing the assignment requirements:

- Trainer dashboard
- Course creation UI (reactive forms + validation)
- Student analytics view (simple bar visualization)
- Schedule calendar / session creation
- Notification panel
- Lazy-loaded `TrainerModule`
- Role-based rendering via `AuthService`
- Mock interceptor acting as fake backend (`MockBackendInterceptor`)

How to run

1. Install dependencies: `npm install`
2. Start dev server: `npm start` (this uses `npx ng serve`)
3. Open http://localhost:4200

Manual testing checklist

1. Open app and use the Demo trainer login (or select 'Trainer').
2. Visit "Courses" and click "New course" — submit invalid (empty) form to see validation errors, then create a course.
3. Visit "Analytics" to see mock student scores and bars.
4. Visit "Schedule" to create a new session (use date-time input); check it appears in list.
5. Visit "Notifications" to view mock notifications; header shows unread count.
6. Logout and login as 'Admin' to see admin menu link (protected route).

Notes and grading checklist

- Forms & validations: see `CourseFormComponent`
- Lazy-loaded admin/trainer modules: `TrainerModule` and `AdminModule` are lazy loaded at `/trainer` and `/admin` respectively
- Role-based rendering: `SidebarComponent` shows Admin link only for admin role, and `AuthGuard` protects `/admin`
- Reusable components: `Header`, `Sidebar`
- Interceptors (mock): `MockBackendInterceptor` responds to `/api/*` endpoints

Next steps / improvements (optional)
- Add unit tests and E2E tests
- Improve UI with a design system
- Add real charting library for rich analytics

