import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggle} from '@angular/material/slide-toggle'
import { FootComponent } from "./layouts/foot/foot.component";
import { PublicHeaderComponent } from "./layouts/public-header/public-header.component";
import { PrivateHeaderComponent } from "./layouts/private-header/private-header.component";
import { PublicMenuComponent } from "./layouts/public-menu/public-menu.component";
import { PrivateMenuComponent } from "./layouts/private-menu/private-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggle, FootComponent, PublicHeaderComponent, PrivateHeaderComponent, PublicMenuComponent, PrivateMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '1-layout';
}
