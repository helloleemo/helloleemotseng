import { Component } from '@angular/core';
import { SplitAreaComponent, SplitComponent } from 'angular-split';
import { FullPageBlurComponent } from '../../shared/full-page-blur/full-page-blur.component';


@Component({
  selector: 'app-resizer',
  standalone: true,
  imports: [SplitComponent, SplitAreaComponent],
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.css'],
})
export class ResizerComponent {

  leftSize: number = 50;
  rightSize: number = 50;

  animationState: 'blur' | 'clear' = 'blur';

  ngOnInit() {
    setTimeout(() => {
      this.animationState = 'clear';
    }, 5000);
 }
}

