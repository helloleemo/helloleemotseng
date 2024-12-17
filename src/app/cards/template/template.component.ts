import { Component, Input } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, RouterLink, RouterOutlet, Event as RouterEvent } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LoadgingComponent } from '../../components/loadging/loadging.component';




@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, RouterLink, CommonModule,LoadgingComponent],
  templateUrl: './template.component.html',
  animations: []

})
export class TemplateComponent {
  @Input() animationState: 'blur' | 'clear' = 'blur';
  @Input() templateStyle: string = 'text-white';

  isLoading = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationError) {

        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    });
  }

}
