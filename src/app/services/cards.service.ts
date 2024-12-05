import { Injectable } from '@angular/core';

export interface CardInterface {
  id: number;
  tag: string;
  name: string;
  tags: string[];
  description: string;
  linkto: string;
  hyperlink: string;
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
        tags: ['Angular18', 'Tailwind'],
        linkto: '/template/resizer',
        hyperlink: '',
        img: '',
        innerHtml: '<div class="bg-dark/10 min-w-full min-h-full rounded-lg">d</div>'
      }, {
        id: 2,
        tag: 'Website',
        name: 'T3co Co-working Space',
        tags: ['Angular', 'Tailwind', 'Monitor', 'Material Design'],
        linkto: '/template/monitor',
        hyperlink: '',
        img: '',
        description: 'Placed in the center of the screen, this monitor is a great way to display your content.',
        innerHtml: '<duv>testtest</div>'
      }, {
        id: 3,
        tag: 'Website',
        name: 'Chair!',
        tags: ['Vue', 'Commercial website', 'Vuetify'],
        linkto: '',
        hyperlink: 'https://www.google.com',
        img: '',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        innerHtml: '<duv>testtest</div>'
      }, {
        id: 3,
        tag: 'Components',
        name: 'Searching for APT',
        tags: ['Vue', 'Commercial website', 'Vuetify'],
        linkto: 'https://www.google.com',
        hyperlink: '',
        img: '',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        innerHtml: '<duv>testtest</div>'
      }, {
        id: 4,
        tag: 'Website',
        name: 'To do list',
        tags: ['Angular', 'Tool', 'Material Design'],
        linkto: 'https://www.google.com',
        hyperlink: '',
        img: '',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        innerHtml: '<duv>testtest</div>'
      }, {
        id: 5,
        tag: '',
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: '',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        innerHtml: '<duv>testtest</div>'
      }, {
        id: 6,
        tag: '',
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: '',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        innerHtml: '<duv>testtest</div>'
      }, {
        id: 7,
        tag: '',
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: '',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        innerHtml: '<duv>testtest</div>'
      }, {
        id: 8,
        tag: '',
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: '',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        innerHtml: '<duv>testtest</div>'
      }, {
        id: 9,
        tag: '',
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: '',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        innerHtml: '<duv>testtest</div>'
      }, {
        id: 10,
        tag: '',
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: '',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        innerHtml: '<duv>testtest</div>'
      }, {
        id: 11,
        tag: '',
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: '',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        innerHtml: '<duv>testtest</div>'
      }, {
        id: 12,
        tag: '',
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: '',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        innerHtml: '<duv>testtest</div>'
      }
    ];
  }
}
