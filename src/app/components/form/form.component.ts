import { MatRipple } from '@angular/material/core';
import { MouseService } from '../../services/mouse.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatRipple],
  templateUrl: './form.component.html',
})
export class FormComponent {
  constructor(public MouseService: MouseService) {}
}
