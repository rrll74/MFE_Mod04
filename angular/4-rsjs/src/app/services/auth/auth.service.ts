import { LoginEntity } from '@/app/models';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: LoginEntity = { username: '', isLogged: false };
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  private loggingSubject = new BehaviorSubject<boolean>(false);
  logging$ = this.loggingSubject.asObservable();
  private router = inject(Router);

  constructor() {
    this.loadLocalStorage();
    console.log(this.user);
  }

  login(username: string, password: string): void {
    this.loggingSubject.next(true);
    console.log(this.logging$);
    setTimeout(() => {
      if (username === 'master8@lemoncode.net' && password === '12345678') {
        this.user = { username: username, isLogged: true };
        this.log(['/dashboard']);
        console.log(this.user);
        this.loggingSubject.next(false);
        console.log(this.logging$);
      }
    }, 2000);
  }

  logout(): void {
    this.user = { username: '', isLogged: false };
    this.log(['/home']);
    console.log(this.user);
  }

  log(route: string[] = []): void {
    localStorage.setItem('loggedUser', JSON.stringify(this.user));
    if (route.length > 0) this.router.navigate(route);
    this.isLoggedInSubject.next(this.user.isLogged);
  }

  isLogged(): boolean {
    this.loadLocalStorage();
    this.isLoggedInSubject.next(this.user.isLogged);
    console.log('isLogged', this.isLoggedInSubject.value);

    return this.isLoggedInSubject.value;
  }

  loadLocalStorage(): void {
    const loggedUserJSON = localStorage.getItem('loggedUser');
    const loggedUser: LoginEntity = JSON.parse(loggedUserJSON || '');
    this.user = { ...loggedUser };
  }

  getUsername(): string {
    return this.user.username || '';
  }
}
