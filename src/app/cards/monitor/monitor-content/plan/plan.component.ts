import { Component, inject, OnInit } from '@angular/core';



import { MatRippleModule } from '@angular/material/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { itemAnimation, showUpAnimation } from '../../animation';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
// import { NgModel } from '@angular/forms';




interface PlanItems {
  name: string;
  description: string;
  imgUrl: string;
  price: string;
  features: string[];
  icons?: { name: string, description: string }[];
}

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [MatRippleModule,CommonModule,MatIconModule],
  templateUrl: './plan.component.html',
  animations: [
    trigger('viewPlanItemAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', [animate('300ms ease-in')]),
      transition(':leave', [animate('300ms ease-in')]),
    ]), showUpAnimation, itemAnimation
  ]
})
export class PlanComponent implements OnInit {
  httpClient = inject(HttpClient); // Inject the HttpClient service
  plans: PlanItems[] = [];
  ngOnInit(): void {
    this.httpClient.get<{ PlanItems: PlanItems[] }>('monitor/json/plans.json')
      .subscribe(data => {
        this.plans = data.PlanItems.map(item => ({
          ...item,
          imgUrl: `monitor/${item.imgUrl}`,
        }));
        console.log(this.plans);
      })
  }

  dynamicTitle = 'Plan';
  
  rippleColor: string = 'rgba(255, 255, 255, 0.3)';
  centered = true;
  radius = 600;

  isOpen: boolean = false;
  selectedPlanItem: PlanItems | null = null; // To store the selected item

  openPlanItem(item: PlanItems) {
    this.isOpen = true;
    this.selectedPlanItem = item;
    // console.log(item)
  }
  closePlanItem() {
    this.isOpen = false;
  }
}
