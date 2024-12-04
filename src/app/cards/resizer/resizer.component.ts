import { Component } from '@angular/core';
import { SplitAreaComponent, SplitComponent } from 'angular-split';

// 替代類型定義（適用於某些版本不明確的情況）
interface SplitGutterEvent {
  gutterNum: number;
  sizes: number[];
}

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

}