import { Component } from '@angular/core';

@Component({
  selector: 'app-resizer',
  standalone: true,
  imports: [],
  templateUrl: './resizer.component.html',
})
export class ResizerComponent {
  isDragging = false;
  minHeight = 100;



  onMouseDown(){
    this.isDragging = true;

  }

  getBoundingClientRect(){
    return {
    }
  }

}
