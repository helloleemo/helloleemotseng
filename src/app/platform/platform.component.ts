import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MouseService } from '../services/mouse.service';
import { CardsService } from '../services/cards.service';
import { CardInterface } from '../services/cards.service';
import { RouterLink } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';




interface tagItems {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [CommonModule, MatRipple, RouterLink],
  templateUrl: './platform.component.html',
  animations: [
    trigger('hoverAnimation', [
      state('default', style({ opacity: 0 })),
      state('hover', style({ opacity: 1, })),
      transition('default => hover', animate('0.5s ease-in-out'))
    ]),
    trigger('cardAnimation', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('0.3s ease-in-out')),
    ]),

  ]
})
export class PlatformComponent implements OnInit {
  title = 'platform';
  mouseService = inject(MouseService);
  http = inject(HttpClient);
  cardsService = inject(CardsService);
  cardStates: string[] = [];

  // hover state
  isHovered = false;

  mouseEnter() {
    this.isHovered = true;
  }
  mouseLeave() {
    this.isHovered = false;
  }

  // Tag list

  tagList: tagItems[] = [
    {
      id: 5,
      name: "All",
      description: "description1"
    }, {
      id: 1,
      name: "Product",
      description: "description1"
    }, {
      id: 2,
      name: "Toolkit",
      description: "description1"
    }, {
      id: 3,
      name: "Graphics",
      description: "description1"
    }, {
      id: 4,
      name: "UIUX",
      description: "description1"
    }, {
      id: 4,
      name: "Challenge",
      description: "description1"
    }
  ]

  // Cards list

  cardList: CardInterface[] = [];

  ngOnInit(): void {
    this.cardList = this.cardsService.cardsList();
    this.initializeCardStates();
    this.animateAllCards();

  }

  initializeCardStates(): void {
    this.cardStates = new Array(this.cardList.length).fill('hidden');
  }

  animateAllCards(): void {
  this.cardList.forEach((_, index) => {
    setTimeout(() => {
      this.cardStates[index] = 'visible';
    }, index * 100); 
  });
}

  selectedTag: string = "All";

  selectTag(tag: string) {
    this.selectedTag = tag;
    const filteredCards = this.filterCards();
    this.cardStates = new Array(filteredCards.length).fill('hidden');
    // console.log(this.selectedTag);

    filteredCards.forEach((_, index) => {
    setTimeout(() => {
      this.cardStates[index] = 'visible';
    }, index * 200); 
  });

  }

  filterCards(): CardInterface[] {
    if (this.selectedTag === "All") {
      return this.cardList;
    }
    return this.cardList.filter((card) => card.tag === this.selectedTag);
  }

  hoverActive: boolean = false;
  hoverStates: boolean[] = [];

  showHover(index: number): void {
    this.hoverStates[index] = true;
  }

  hideHover(index: number): void {
    this.hoverStates[index] = false;
  }

}
