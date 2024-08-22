import { Component } from '@angular/core';

@Component({
  selector: 'app-private-header',
  standalone: true,
  imports: [],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss',
})
export class PrivateHeaderComponent {
  rutaLogo =
    'https://img.freepik.com/vector-gratis/lindo-personaje-dibujos-animados-leon_1308-133566.jpg';
}
