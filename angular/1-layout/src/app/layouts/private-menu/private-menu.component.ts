import { AuthService } from '@/app/services/auth.service';
import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-private-menu',
  standalone: true,
  imports: [MatButtonModule, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './private-menu.component.html',
  styleUrl: './private-menu.component.scss',
})
export class PrivateMenuComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  sub!: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.sub = this.authService.isLoggedIn$.subscribe((item) => {
      this.isLoggedIn = item;
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
  }
}
