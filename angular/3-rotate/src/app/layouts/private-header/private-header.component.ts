import { AuthService } from '@/app/services/auth/auth.service';
import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-private-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss',
})
export class PrivateHeaderComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  sub!: Subscription;

  rutaLogo =
    'https://img.freepik.com/vector-gratis/lindo-personaje-dibujos-animados-leon_1308-133566.jpg';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.sub = this.authService.isLoggedIn$.subscribe((item) => {
      this.isLoggedIn = item;
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getUserName(): string {
    return this.authService.getUsername();
  }
}
