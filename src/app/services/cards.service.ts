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
      // {
      //   id: 5,
      //   tag: ['Websites / Components'],
      //   name: 'Demo to Shipment Tracking System',
      //   tags: ['Angular18', 'Rxjs', 'Material Design UI', 'UIUX'],
      //   linkto: '/template/tracking-system/shipment-summary',
      //   hyperlink: '',
      //   img: '',
      //   description: 'Enables customers to track their shipments by entering tracking numbers or logging in to check the shipping status of their clients.',
      //   innerHtml: ''
      // }, 
      {
        id: 2,
        tag: ['Websites / Components'],
        name: 'T3co Co-working Space for Vertical Monitor',
        tags: ['Angular18', 'Tailwind', 'Monitor', 'Material Design UI'],
        linkto: '/template/monitor/home-menu',
        hyperlink: '',
        img: 'platform/website-2.webp',
        description: 'Provides introductions to spaces and plans for business and customer discussions, accessible through a vertical monitor interface.',
        innerHtml: ''
      }, {
        id: 25,
        tag: ['Websites / Components'],
        name: '都是WEATHER你 with weather API',
        description: 'This is a Weather API that allows users to search for weather information by entering the city name.',
        tags: ['Angular18', 'Rxjs', 'weather API', 'Tailwind',],
        linkto: '/template/weather-api',
        hyperlink: '',
        img: 'platform/weaather.webp',
        innerHtml: ``
      }, {
        id: 26,
        tag: ['Websites / Components'],
        name: 'Resizer Component',
        description: 'This is a Resizer component that allows adjusting the size of the left and right sections by moving the middle gutter.',
        tags: ['Angular18', 'Tailwind'],
        linkto: '/template/resizer',
        hyperlink: '',
        img: 'resizer/resizer.webp',
        innerHtml: ``
      }, {
        id: 23,
        tag: ['Websites / Components',],
        name: 'Todo List with Drag and Drop API',
        description: 'This is a simple to-do list application that allows users to add, edit, and delete tasks.',
        tags: ['Angular18', 'Tailwind'],
        linkto: '/template/to-do-list',
        hyperlink: '',
        img: 'platform/website-3.webp',
        innerHtml: ``
      }, {
        id: 21,
        tag: ['Websites / Components'],
        name: '珍奇椅購物網站 Precious Chair',
        tags: ['Vue', 'Commercial website', 'Shopping cart'],
        linkto: '',
        hyperlink: 'https://helloleemo.github.io/shoppingweb/',
        img: 'platform/website-1.webp',
        description: 'Precious Chair website providing comprehensive information on various chairs, including shopping cart functionality.',
        innerHtml: ''
      }, {
        id: 22,
        tag: ['UIUX'],
        name: 'Charging System',
        tags: ['User Research', 'Figma', 'Product Management'],
        linkto: '',
        hyperlink: '',
        img: 'platform/ui-delpot.webp',
        description: 'Charging System provides users with information about charging stations and allows them to search for charging station locations.',
        innerHtml: ''
      },
      {
        id: 3,
        tag: ['UIUX'],
        name: '2024 Annual Conference APP',
        tags: ['User Interface', 'Figma'],
        linkto: '',
        hyperlink: '',
        img: 'platform/ui-annual.webp',
        description: 'Allows VIP participents to check agendas, speakers, locations, and other information during the annual conference.',
        innerHtml: ''
      }, {
        id: 4,
        tag: ['UIUX'],
        name: 'Rehabilitation Application',
        tags: ['User Reasearch', 'AI Detection', 'Medical Device'],
        linkto: '',
        hyperlink: '',
        img: 'platform/ui-aifree.webp',
        description: 'This intelligent health promotion system integrates professional rehabilitation indication, offering remote and digital services for the seniors during rehabilitation or health promotion periods. It provides optimal rehabilitation plans with the goals of "gamification, intelligence, and customization."',
        innerHtml: ''
      }, {
        id: 6,
        tag: ['Achivements'],
        name: 'the 18th Industrial Design Gold Medal in the Y.S. Award',
        tags: ['Awards', 'Product Design', 'Medical Device'],
        linkto: '',
        hyperlink: '',
        img: 'platform/achievement-1.webp',
        description: 'Awarded the 18th Industrial Design Gold Medal in the Y.S. Award. This zero-contact rehabilitation training service integrates remote and digital medical forms to help patients conduct high-intensity rehabilitation at home. It reduces the burden on doctors and minimizes hospital visits, leveraging big data analysis to assist in medical judgments and introduce a new healthcare model.',
        innerHtml: `<div class="absolute left-10 bottom-10">
        <img src="platform/award.webp" class="w-[180px] object-cover" alt="">
        </div>`
      }, {
        id: 8,
        tag: ['Achivements'],
        name: '2021 SAKURA Awards',
        tags: ['Product Design', 'Kitchen Interface'],
        linkto: '',
        hyperlink: '',
        img: 'platform/achievement-3.webp',
        description: 'The intelligent interactive kitchen interface fosters family connections, creating a more humanized and futuristic kitchen experience through technology.',
        innerHtml: `<div class="absolute left-10 bottom-10">
        <img src="platform/award.webp" class="w-[180px] object-cover" alt="">
        </div>`
      }, {
        id: 20,
        tag: ['Achivements'],
        name: 'UNI-ONE KD Furniture Design Competition Honorable Mention',
        tags: ['Product Design', 'Furniture Design'],
        linkto: '',
        hyperlink: '',
        img: 'platform/achievement-4.webp',
        description: 'The UNI-ONE modular furniture won an honorable mention in the UNI-ONE furniture design competition. Designed for small rental spaces, this furniture can be customized into different configurations based on needs.',
        innerHtml: `<div class="absolute left-10 bottom-10">
        <img src="platform/award.webp" class="w-[180px] object-cover" alt="">
        </div>`
      }, {
        id: 7,
        tag: ['Achivements'],
        name: '2021-2022 Stanford Center on Longevity Design Challenge Asia',
        tags: ['Product Design', 'Medical Device'],
        linkto: '',
        hyperlink: '',
        img: 'platform/achievement-2.webp',
        description: '(Longevity-Ready Environments: Rethinking Physical Spaces for Century-Long Lives)Finalist in the Stanford Center on Longevity Design Challenge Asia. Proposes remote medical services for rehabilitation in an aging society, allowing seniors to rehabilitate at home.',
        innerHtml: `<div class="absolute left-10 bottom-10">
        <img src="platform/award.webp" class="w-[180px] object-cover" alt="">
        </div>`
      }, {
        id: 17,
        tag: ['Achivements'],
        name: 'Articulation Training Cards',
        tags: ['IEEE ECBIOS 2023 SCI', 'Product Design', 'Medical Device'],
        linkto: '',
        hyperlink: '',
        img: 'platform/UX-article.webp',
        description: 'Cards designed for children with articulation issues in early intervention, tailored to age and articulation development based on therapist interviews and relevant literature.',
        innerHtml: `<div class="absolute left-10 bottom-10">
        <img src="platform/award.webp" class="w-[180px] object-cover" alt="">
        </div>`
      }, {
        id: 11,
        tag: ['Others',],
        name: 'Ho-Yi Anesthesiologist Visual System Design',
        tags: ['CIS','Registered Trademark'],
        linkto: '',
        hyperlink: '',
        img: 'platform/graphics-3.webp',
        description: 'Visual system design for an anesthesiology team aiming to promote "anesthesia safety" as a priority. Advocates correct anesthesia practices with a highly professional medical standard, ensuring all procedures are performed by specialized anesthesiologists. The design emphasizes greater safety and peace of mind for patients.',
        innerHtml: ''
      }, {
        id: 12,
        tag: ['Others'],
        name: 'Linkoo Visual System Design',
        tags: ['CIS','Registered Trademark'],
        linkto: '',
        hyperlink: '',
        img: 'platform/graphics-5.webp',
        description: 'Linkoo combines "Link" and "All" to connect everything and create unlimited possibilities. The goal is to become a leading global trade provider, improving connectivity and efficiency across industries. At Linkoo, we believe connection is fundamental, fostering innovation, collaboration, and value creation. We aim to build a shared and sustainable environment through connections.',
        innerHtml: ''
      }, {
        id: 13,
        tag: ['Others'],
        name: 'Educational Materials for Hospital Breast Imaging Division',
        tags: ['Educational Materials'],
        linkto: '',
        hyperlink: '',
        img: 'platform/graphics-6.webp',
        description: 'Educational materials for the Breast Imaging Division of NTUH, facilitating physicians in explaining medical knowledge to patients effectively.',
        innerHtml: ''
      }, {
        id: 23,
        tag: ['Others'],
        name: 'Gingers from the Mekarang',
        tags: ['CIS','Registered Trademark'],
        linkto: '',
        hyperlink: '',
        img: 'platform/graphics-7.webp',
        description: 'A visual system design for ginger farming products from the Atayal tribe, located in Hsinchu\'s Mekarang Village.',
        innerHtml: ''
      }, {
        id: 14,
        tag: ['Others'],
        name: 'Textbook Design',
        tags: ['Graphic Design'],
        linkto: '',
        hyperlink: '',
        img: 'platform/graphics-books.webp',
        description: 'Textbook designed for students learning Chinese classics and literature.',
        innerHtml: ''
      }, {
        id: 16,
        tag: ['Others'],
        name: 'URSUHA Baby Handle',
        tags: ['Product Design', 'Training Handle'],
        linkto: '',
        hyperlink: '',
        img: 'platform/product-baby-handle.webp',
        description: 'A baby handle designed to promote the development of infants\' hand muscles and sensory abilities. Based on market research, existing baby products often overlook the importance of grip design for early development, especially for hand coordination and strength training. This product combines cognitive development and functionality in a bottle handle.',
        innerHtml: ''
      }, {
        id: 19,
        tag: ['Others'],
        name: 'Alpha Generation Makeup - Honorable Mention',
        tags: ['Proposals'],
        linkto: '',
        hyperlink: '',
        img: 'platform/Snipaste_2024-12-15_20-10-31.webp',
        description: 'For the Alpha generation, this proposal envisions a future lifestyle centered on makeup, reflecting the rapid evolution of technology.',
        innerHtml: `<div class="absolute left-10 bottom-10">
  <img src="platform/award.webp" class="w-[180px] object-cover" alt="">
  </div>`
      },{
        id: 9,
        tag: ['Others'],
        name: 'Banner',
        tags: ['Graphic Deaign'],
        linkto: '',
        hyperlink: '',
        img: 'platform/graphics-1.webp',
        description: 'Website banners.',
        innerHtml: ''
      }, {
        id: 10,
        tag: ['Others'],
        name: 'Illustration works',
        tags: ['Illustration'],
        linkto: '',
        hyperlink: '',
        img: 'platform/graphics-2.webp',
        description: '',
        innerHtml: ''
      }, 
    ];
  }
}
