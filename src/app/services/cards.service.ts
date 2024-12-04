import { Injectable } from '@angular/core';

export interface CardInterface {
  id: number;
  tag: string;
  name: string;
  tags: string[];
  description: string;
  linkto: string;
  innerHtml: string;
  img: string;
}

@Injectable({
  providedIn: 'root'
})

export class CardsService {
  cardsList(): CardInterface[] {
    return [
      {
        id: 1,
        tag: 'Components',
        name: 'Resizer',
        description: 'This is a resizer component. Use it to resize the inner content of the card.',
        tags: ['Component', 'Tailwind'],
        linkto: '/template/resizer',
        img: 'https://picsum.photos/id/684/600/400',
        innerHtml: '<div class="bg-dark/10 min-w-full min-h-full rounded-lg">d</div>'
      }, {
        id: 2,
        tag: '',
        name: 'Product',
        tags: ['All', 'Resizer'],
        linkto: 'https://www.google.com',
        img: '',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        innerHtml: '<duv>testtest</div>'

      }, {
        id: 3,
        tag: 'Product',
        name: 'Product',
        tags: ['All', 'Resizer'],
        linkto: 'https://www.google.com',
        img: '',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        innerHtml: '<duv>testtest</div>'
      },
    ];
  }
}
