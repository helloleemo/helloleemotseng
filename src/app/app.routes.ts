import { Routes } from '@angular/router';
import { PlatformComponent } from './platform/platform.component';
import { IntroComponent } from './intro/intro.component';

export const routes: Routes = [
  { path: '', component: IntroComponent }, 
  { path: 'platform', component: PlatformComponent } 
];