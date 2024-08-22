import { Component } from '@angular/core';

@Component({
  selector: 'app-public-header',
  standalone: true,
  imports: [],
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.scss',
})
export class PublicHeaderComponent {
  // rutaLogo = "@assets/leon.png";
  rutaLogo =
    'https://img.freepik.com/vector-gratis/lindo-personaje-dibujos-animados-leon_1308-133566.jpg';

}
