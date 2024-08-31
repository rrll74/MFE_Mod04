import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CrudComponent } from './components/crud/crud.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'profile', component: ProfileComponent },
];
