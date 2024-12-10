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
        description: 'This is a resizer component. <br/> Use it to resize the inner content of the card.',
        tags: ['Angular18', 'Tailwind'],
        linkto: '/template/resizer',
        hyperlink: '',
        img: 'resizer/resizer.png',
        innerHtml: ``
      }, {
        id: 2,
        tag: ['Website'],
        name: 'T3co Co-working Space for Vertical Monitor',
        tags: ['Angular18', 'Tailwind', 'Monitor', 'Material Design UI'],
        linkto: '/template/monitor/home-menu',
        hyperlink: '',
        img: 'platform/website-2.png',
        description: 'Placed in the center of the screen, this monitor is a great way to display your content.',
        innerHtml: ''
      }, {
        id: 3,
        tag: ['UIUX'],
        name: '2024 Annual Conference APP',
        tags: ['User Interface', 'Figma'],
        linkto: '',
        hyperlink: '',
        img: 'platform/ui-annual.png',
        description: '',
        innerHtml: ''
      }, {
        id: 3,
        tag: ['UIUX'],
        name: 'Rehabilitation application',
        tags: ['User Reasearch','AI Detection','Medical Device'],
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
        linkto: '',
        hyperlink: '',
        img: '',
        description: '',
        innerHtml: ''
      }, {
        id: 5,
        tag: ['Achivements'],
        name: '育秀盃金獎',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/achievement-1.png',
        description: '',
        innerHtml: `<div class="absolute right-10 top-10">
        <img src="platform/award.png" class="w-[200px] object-cover" alt="resizer">
        </div>`
      }, {
        id: 6,
        tag: ['Achivements'],
        name: '史丹佛入圍',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/achievement-2.png',
        description: '',
        innerHtml: `<div class="absolute right-10 top-10">
        <img src="platform/award.png" class="w-[200px] object-cover" alt="resizer">
        </div>`
      }, {
        id: 7,
        tag: ['Achivements'],
        name: 'SAKURA佳作',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/achievement-3.png',
        description: '',
        innerHtml: `<div class="absolute right-10 top-10">
        <img src="platform/award.png" class="w-[200px] object-cover" alt="resizer">
        </div>`
      }, {
        id: 8,
        tag: ['Graphics'],
        name: 'Banner',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/graphics-1.png',
        description: '',
        innerHtml: ''
      }, {
        id: 9,
        tag: ['Graphics'],
        name: '魚',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/graphics-2.png',
        description: '',
        innerHtml: ''
      }, {
        id: 10,
        tag: ['Graphics'],
        name: '麻醉團隊',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/graphics-3.png',
        description: '',
        innerHtml: ''
      }, {
        id: 11,
        tag: ['Graphics'],
        name: 'Linkoo',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/graphics-5.png',
        description: '',
        innerHtml: ''
      }, {
        id: 12,
        tag: ['Graphics'],
        name: '衛教',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/graphics-6.png',
        description: '',
        innerHtml: ''
      }, {
        id: 10,
        tag: ['Graphics'],
        name: '梅好將來',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/graphics-7.png',
        description: '',
        innerHtml: ''
      }, {
        id: 10,
        tag: ['Graphics'],
        name: '國文課本',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/graphics-books.png',
        description: '',
        innerHtml: ''
      }, {
        id: 10,
        tag: ['Graphics'],
        name: '梅好將來',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/graphics-chiang.png',
        description: '',
        innerHtml: ''
      }, {
        id: 10,
        tag: ['Product'],
        name: '寶寶握把',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/product-baby-handle.png',
        description: '',
        innerHtml: ''
      },{
        id: 10,
        tag: ['Product'],
        name: '構音障礙',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/UX-article.png',
        description: '',
        innerHtml: ''
      },{
        id: 10,
        tag: ['Product'],
        name: '穩足',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/穩足DEMO.mp4',
        description: '',
        innerHtml: ''
      },{
        id: 10,
        tag: ['Product'],
        name: 'Ready to shine',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/ReadytoShine-video.mp4',
        description: '',
        innerHtml: ''
      },{
        id: 10,
        tag: ['Achivements'],
        name: '家具',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/achievement-4.png',
        description: '',
        innerHtml: `<div class="absolute right-10 top-10">
        <img src="platform/award.png" class="w-[200px] object-cover" alt="resizer">
        </div>`
      },{
        id: 10,
        tag: ['Website'],
        name: '珍奇椅',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/website-1.png',
        description: '',
        innerHtml: ''
      },{
        id: 10,
        tag: ['UIUX'],
        name: 'DElpot',
        tags: [''],
        linkto: '',
        hyperlink: '',
        img: 'platform/ui-delpot.png',
        description: '',
        innerHtml: ''
      }
    ];
  }
}
