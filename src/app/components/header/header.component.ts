
import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';

import { MatRippleModule } from '@angular/material/core';
import { Router, RouterModule } from '@angular/router';
import { MouseService } from '../../services/mouse.service';



interface menuItems {
  name: string;
  link: string;
  hyperlink?: string;
}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatRippleModule],
  templateUrl: './header.component.html',
  animations: [
  ]

})
export class HeaderComponent {

  menuList: menuItems[] = [
    {
      name: `<p class="block sm:hidden">LM</p><p class="hidden  sm:block">LeeMo</p>`,
      link: "/"
    }, {
      name: "Platform",
      link: "/platform"
    },
    //  {
    //   name: "Articles",
    //   link: "/articles"
    // },
    //  {
    //   name: `
    //     <div class="flex items-center">
    //       <i class="material-icons ">download</i>
    //       <p class="sm:block hidden">CV<p>
    //     </div>`,
    //   link: "",
    //   hyperlink: "https://drive.usercontent.google.com/u/0/uc?id=1lXNZ7-86akO1uoOMP4TNDsqjbykK4ShT&export=download"
    // }
  ]

  mouseService = inject(MouseService);
  // constructor(public mouseService:MouseService){
  // }


  selectedItem: string = "";
  router: Router = inject(Router);
  ngOnInit(): void {
    const currentUrl = this.router.url;
    const currentMenu = this.menuList.find((menu) => menu.link === currentUrl);
    if (currentMenu) {
      this.selectedItem = currentMenu.name;
    }
  }
  selectItem(item: string) {
    if (item == this.selectedItem) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      }
      );
    } else {
      window.scrollTo(0, 0);
    };
    this.selectedItem = item;
  }


  // Scroll down and hidden header

  isVisible: boolean = true;
  lastScrollPosition: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.scrollY;
    // console.log(currentScrollPosition);

    if (currentScrollPosition > 150 && currentScrollPosition > this.lastScrollPosition) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
    this.lastScrollPosition = currentScrollPosition;
  }

  // shows up when main page is loaded

}
