import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { fullPageBlurAnimation } from '../../shared/animations';
import { MatIconModule } from '@angular/material/icon';




@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, RouterLink],
  templateUrl: './template.component.html',
  animations:[fullPageBlurAnimation]

})
export class templateComponent {
  @Input() animationState: 'blur' | 'clear' = 'blur';
  backToPlateformStyle: string = 'text-white';
}
