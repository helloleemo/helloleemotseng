import { Component } from '@angular/core';
import { TemplateComponent } from '../template/template.component';
import { MatIconModule } from '@angular/material/icon';

import { SubmenuComponent } from "./submenu/submenu.component";

import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [TemplateComponent, MatIconModule, SubmenuComponent, CommonModule],
  templateUrl: './monitor.component.html',
})
export class MonitorComponent {

  showSubmenu: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkUrl();
      }
    });
  }
  checkUrl() {
    this.showSubmenu = !this.router.url.includes('/home-menu');
  }
}
