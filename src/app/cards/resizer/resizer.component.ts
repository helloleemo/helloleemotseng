import { Component, HostListener, OnInit } from '@angular/core';
import { SplitAreaComponent, SplitComponent } from 'angular-split';
import { templateComponent } from '../template/template.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-resizer',
  standalone: true,
  imports: [SplitComponent, SplitAreaComponent, templateComponent, MatIconModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.css'],
})
export class ResizerComponent implements OnInit {

  leftSize: number = 50;
  rightSize: number = 50;

  isShowed: boolean = true;

  OnInit(): void {
    this.isShowed = true;
  }
  destroyed() {
    this.isShowed = false;
  }

  @HostListener('document:mousedown', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    this.isShowed = false;
  }

  animationState: 'blur' | 'clear' = 'blur';



  isLoading = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
  spinnerColor="#555";

}
