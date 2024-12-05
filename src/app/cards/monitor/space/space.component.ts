import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { itemAnimation, showUpAnimation } from '../animation';
import { filter } from 'rxjs';
// import { templateComponent } from '../../template/template.component';
import { MatIconModule } from '@angular/material/icon';

interface SpaceItems {
  name: string;
  linkTo: string;
  colSpan: string;
  rowSpan: string;
  imgUrl: string;
}

@Component({
  selector: 'app-space',
  standalone: true,
  imports: [CommonModule, RouterModule, MatRippleModule, MatIconModule],
  templateUrl: './space.component.html',
  animations: [showUpAnimation,itemAnimation]
})
export class SpaceComponent implements OnInit {
  dynamicTitle: string = "Space";
  dynamicFooter: string = "Back to Home";
  subIsHomeMenu: boolean = false;

  rippleColor: string = 'rgba(255, 255, 255, 0.3)';
  radius: number = 500;
  isChildRouteActive = false;

  spaceItems: SpaceItems[] = [
    {
      name: 'Private Office',
      linkTo: 'monitor/private-office',
      imgUrl: "/monitor/space/Private-office-thumbnail.png",
      colSpan: "",
      rowSpan: "row-span-2",
    },
    {
      name: 'Hot Desk',
      linkTo: 'hot-desk',
      colSpan: "col-span-1",
      rowSpan: "",
      imgUrl: "/monitor/space/Hot-Desk-thunbnail.jpg",
    },
    {
      name: 'Open Area',
      linkTo: 'open-area',
      colSpan: "col-span-1",
      rowSpan: "",
      imgUrl: "/monitor/space/Open-Area-thumbnail.png",
    },
    {
      name: 'Meeting Room',
      linkTo: 'meeting-room',
      colSpan: "col-span-2",
      rowSpan: "",
      imgUrl: "/monitor/space/Meeting-Room-thumbnail.jpg",
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}


  isHovered = false;

  ngOnInit(): void {
    // 監聽路由變化以判斷是否為子路徑
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isChildRouteActive = !!this.route.firstChild;
      });
  }
}