import { AuthService } from '@/app/services/auth.service';
import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-public-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.scss',
})
export class PublicHeaderComponent implements OnInit, OnDestroy {
  // rutaLogo = "@/assets/leon.png";

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
