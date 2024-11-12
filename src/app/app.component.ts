import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PlatformComponent } from './platform/platform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,PlatformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2025PF';
}
