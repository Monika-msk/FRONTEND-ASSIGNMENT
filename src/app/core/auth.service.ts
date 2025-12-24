import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  private roleKey = 'faculty_portal_role';
  get role(){ return localStorage.getItem(this.roleKey) || 'guest'; }
  setRole(role: string){ localStorage.setItem(this.roleKey, role); }
  setRoleClear(role: string){ this.setRole(role); }
  isTrainer(){ return this.role === 'trainer'; }
  isAdmin(){ return this.role === 'admin'; }
}
