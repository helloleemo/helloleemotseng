import { Component, inject, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { MouseService } from './services/mouse.service';
import { FooterComponent } from './footer/footer.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  mouseService = inject(MouseService);
  http = inject(HttpClient);
  // constructor(public mouseService: MouseService) {
  // }
}
