import { Component } from '@angular/core';

@Component({
  selector: 'app-foot',
  standalone: true,
  imports: [],
  templateUrl: './foot.component.html',
  styleUrl: './foot.component.scss',
})
export class FootComponent {
  thisYear() {
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    return anioActual;
  }
}
