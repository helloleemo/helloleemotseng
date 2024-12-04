import { Component, Input } from '@angular/core';
import { fullPageBlurAnimation } from '../animations';

@Component({
  selector: 'app-full-page-blur',
  standalone: true,
  imports: [],
  templateUrl: './full-page-blur.component.html',
  styleUrl: './full-page-blur.component.css',
  animations:[fullPageBlurAnimation]
})
export class FullPageBlurComponent {
    @Input() animationState: 'blur' | 'clear' = 'blur'; 
}
