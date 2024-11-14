// mouse.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MouseService {
  cursorX = 0;
  cursorY = 0;
  isPointer = false;

  constructor() {
    document.addEventListener('mousemove', (event) => {
      this.cursorX = event.clientX;
      this.cursorY = event.clientY;
    });
  }

  togglePointer(state: boolean): void {
    // console.log('Pointer state changed:', state);
    this.isPointer = state;
  }
}
