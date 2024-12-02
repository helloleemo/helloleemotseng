import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './template.component.html',
})
export class templateComponent {
  
}
