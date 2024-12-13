import { Component } from '@angular/core';
import { MilestonesComponent } from '../milestones/milestones.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { TemplateComponent } from '../../template/template.component';

export interface processItems {
  name: string;
  icon: string;
  flight?: [{
    flight: string;
    origin: string;
    destination: string;
  }],
  time?: string;
  image?: boolean;
  imgUrlList?: [
    {
      imgUrl?: string;
      imgAlt?: string;
    }
  ];
}

@Component({
  selector: 'app-shipment-summary',
  standalone: true,
  imports: [MilestonesComponent,MatIconModule,MatRippleModule,TemplateComponent],
  templateUrl: './shipment-summary.component.html',


})
export class ShipmentSummaryComponent {
  rippleColor = 'rgba(255,255,255,0.2)';
    processList: processItems[] = [
    {
      name: 'Booking Creation',
      icon: 'inventory',
      time: '2021-07-01 12:00',

    },
    {
      name: 'ETD',
      icon: 'package_2',
      flight: [{
        flight: 'BRO650',
        origin: 'TPE',
        destination: 'IAH'
      }],
      time: '2021-07-01 12:00',
      image: false,
      imgUrlList: [{
        imgUrl: 'https://www.airport-technology.com/wp-content/uploads/sites/3/2020/07/airport-technology-1.jpg',
        imgAlt: 'airport'
      }
      ],
    },
    {
      name: 'ATD',
      time: '2021-07-01 12:00',
      icon: 'box',
      image: true,

    },
    {
      name: 'ETA',
      icon: 'flight_land',
      flight: [{
        flight: 'BRO650',
        origin: 'TPE',
        destination: 'IAH'
      }],
      time: '2021-07-01 12:00',
      image: false,
      imgUrlList: [{
        imgUrl: 'https://www.airport-technology.com/wp-content/uploads/sites/3/2020/07/airport-technology-1.jpg',
        imgAlt: 'airport'
      }
      ],
    },
    {
      name: 'ATA',
      time: '2021-07-01 12:00',
      icon: 'event_available',
      image: true,

    },
  ]

}
