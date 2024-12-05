import { Component } from '@angular/core';
import { templateComponent } from '../template/template.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeMenuComponent } from './monitor-content/home-menu/home-menu.component';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [templateComponent, MatIconModule, HomeMenuComponent],
  templateUrl: './monitor.component.html',
})
export class MonitorComponent {


}
