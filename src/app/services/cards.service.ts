import { Injectable } from '@angular/core';

export interface CardInterface {
  id: number;
  tag: string;
  name: string;
  description: string;
  linkto: string;
  innerHtml: string;
}

@Injectable({
  providedIn: 'root'
})

export class CardsService {
  cardsList(): CardInterface[] {
    return [
      {
        id: 1,
        tag: 'All',
        name:'Product',
        description: 'description1',
        linkto: '',
        innerHtml:'<div class="bg-dark/10 min-w-full min-h-full rounded-lg">d</div>'
      },      {
        id: 2,
        tag: 'Product',
        name:'Product',
        linkto: 'https://www.google.com',

        description: 'description1',
        innerHtml:'<duv>testtest</div>'

      },
    ];
  }
}
