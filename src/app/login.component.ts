import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/auth.service';

@Component({
  template: `
    <div class="card" style="max-width:440px;margin:40px auto">
      <h2>Sign in</h2>
      <div class="form-field">
        <label class="small">Select role</label>
        <select class="input" #role>
          <option value="trainer">Trainer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div style="display:flex;gap:8px">
        <button class="button" (click)="login(role.value)">Sign in</button>
        <button class="button" style="background:#6b7280" (click)="demo()">Demo trainer</button>
      </div>
    </div>
  `
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}
  login(role: string){ this.auth.setRole(role); this.router.navigate(['/trainer']); }
  demo(){ this.auth.setRole('trainer'); this.router.navigate(['/trainer']); }
}
