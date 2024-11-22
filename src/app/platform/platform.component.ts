import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MouseService } from '../services/mouse.service';
import { CardsService } from '../services/cards.service';
import { CardInterface } from '../services/cards.service';
import { RouterLink } from '@angular/router';




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
})
export class PlatformComponent implements OnInit {
  title = 'platform';
  mouseService = inject(MouseService);
  http = inject(HttpClient);
  cardsService = inject(CardsService);

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
  }

  selectedTag: string = "All";

  selectTag(tag: string) {
    this.selectedTag = tag;
    // console.log(this.selectedTag);
  }

  filterCards(): CardInterface[] {
    if (this.selectedTag === "All") {
      return this.cardList;
    }
    return this.cardList.filter((card) => card.tag === this.selectedTag);
  }

  hoverActive:boolean = false;
  showHover(linkto: string): void {
    this.hoverActive = linkto !== ''; 
  }
  hideHover(): void {
    this.hoverActive = false;
  }

}
