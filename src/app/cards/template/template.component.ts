import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, RouterLink, CommonModule],
  templateUrl: './template.component.html',
  animations:[]

})
export class TemplateComponent {
  @Input() animationState: 'blur' | 'clear' = 'blur';
  @Input() templateStyle: string = 'text-white';
  
}
