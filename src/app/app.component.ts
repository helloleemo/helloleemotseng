import { Component, inject, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MouseService } from './services/mouse.service';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  mouseService = inject(MouseService);
  http = inject(HttpClient);

}