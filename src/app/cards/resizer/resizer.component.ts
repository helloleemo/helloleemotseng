import { Component, HostListener, OnInit } from '@angular/core';
import { SplitAreaComponent, SplitComponent } from 'angular-split';
import { templateComponent } from '../template/template.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-resizer',
  standalone: true,
  imports: [SplitComponent, SplitAreaComponent, templateComponent, MatIconModule, CommonModule],
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.css'],
})
export class ResizerComponent {

  leftSize: number = 50;
  rightSize: number = 50;

  isShowed: boolean = true;

  OnInit(): void {
    this.isShowed = true;
  }
    destroyed() {
    this.isShowed = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    this.isShowed = false;
  }

  animationState: 'blur' | 'clear' = 'blur';

}
