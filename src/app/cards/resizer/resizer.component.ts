import { NavigationEnd, Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { SplitAreaComponent, SplitComponent } from 'angular-split';
import { TemplateComponent } from '../template/template.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadgingComponent } from '../../loadging/loadging.component';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-resizer',
  standalone: true,
  imports: [SplitComponent, SplitAreaComponent, TemplateComponent, MatIconModule, CommonModule, MatProgressSpinnerModule, LoadgingComponent],
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.css'],
  animations:[
    trigger('fade',[
      state('void',style({opacity:100})),
      state('hidden',style({opacity:0})),
      transition('void => hidden', [animate('1s ease-in-out')]),
      transition('hidden => void', [animate('1s ease-in-out')]),
    ],
  )
  ]
})
export class ResizerComponent implements OnInit {

  constructor(private router: Router) { }

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
  isAlpha = true;
  ngOnInit(): void {
    this.startLoadingAnimation();
    // window.onload = () => { // on page load
    //   this.isLoading = false;
    //   setTimeout(() => {
    //     this.isAlpha = false;
    //   }, 1000);
    // }
    // this.router.events.subscribe((event) => { // on route change
    //   if (event instanceof NavigationEnd) {
    //     this.startLoadingAnimation();
    //   }
    // });
  }


  startLoadingAnimation(): void {
    this.isLoading = true;
    this.isAlpha = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

  }
}