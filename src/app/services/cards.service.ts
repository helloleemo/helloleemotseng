import { Injectable } from '@angular/core';

export interface CardInterface {
  id: number;
  tag: string[];
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
        tag: ['Components'],
        name: 'Resizer',
        description: 'This is a resizer component. Use it to resize the inner content of the card.',
        tags: ['Angular18', 'Tailwind'],
        linkto: '/template/resizer',
        hyperlink: '',
        img: 'resizer/resizer.png',
        innerHtml: '<div class="text-white ">lifhwilafhls</div>'
      }, {
        id: 2,
        tag: ['Website'],
        name: 'T3co Co-working Space for Vertical Monitor',
        tags: ['Angular18', 'Tailwind', 'Monitor', 'Material Design UI'],
        linkto: '/template/monitor/home-menu',
        hyperlink: '',
        img: 'monitor/monitor.png',
        description: 'Placed in the center of the screen, this monitor is a great way to display your content.',
        innerHtml: ''
      }, {
        id: 3,
        tag: ['APP','UIUX'],
        name: '2024 Annual Conference APP',
        tags: ['Angular', 'Tailwind'],
        linkto: '/template/tracking-system/login',
        hyperlink: '',
        img: 'platform/ui-annual.png',
        description: '',
        innerHtml: ''
      }, {
        id: 3,
        tag: ['UIUX'],
        name: 'Rehabilitation application',
        tags: ['User Reasearch', 'Wireframe'],
        linkto: '',
        hyperlink: '',
        img: 'platform/ui-aifree.png',
        description: '',
        innerHtml: ''
      }, {
        id: 4,
        tag: ['Website'],
        name: 'Shipment Tracking System',
        tags: ['Angular18','Material Design UI','UIUX'],
        linkto: 'https://www.google.com',
        hyperlink: '',
        img: '',
        description: '',
        innerHtml: ''
      }, {
        id: 5,
        tag: ['Achivements'],
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/award01.png',
        description: '',
        innerHtml: '<duv></div>'
      }, {
        id: 6,
        tag: [''],
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: '',
        description: '',
        innerHtml: ''
      }, {
        id: 7,
        tag: [''],
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: '',
        description: '',
        innerHtml: ''
      }, {
        id: 8,
        tag: [''],
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: '',
        description: '',
        innerHtml: ''
      }, {
        id: 9,
        tag: [''],
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: '',
        description: '',
        innerHtml: ''
      }, {
        id: 10,
        tag: [''],
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: '',
        description: '',
        innerHtml: ''
      }, {
        id: 11,
        tag: [''],
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: '',
        description: '',
        innerHtml: ''
      }, {
        id: 12,
        tag: [''],
        name: '',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: '',
        description: '',
        innerHtml: ''
      }
    ];
  }
}
