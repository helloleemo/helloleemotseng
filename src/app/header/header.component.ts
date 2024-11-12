import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


interface menuItems {
  name: string;
  link: string;
}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',

}) 
export class HeaderComponent implements AfterViewInit {
  @ViewChild('menuButton') menuButton!: ElementRef;

  isOpen = false;  

  menuList:menuItems[] = [
    {
      name:"listlistlistlist",
      link:""
    },{
      name:"listlistlist",
      link:""
    },{
      name:"list",
      link:""
    },{
      name:"list",
      link:""
    }
  ]



  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }


  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            this.closeMenu();
          }
        });
      },
      {
        root: null,
        threshold: 0
      }
    );

    if (this.menuButton) {
      observer.observe(this.menuButton.nativeElement);
    }
  }
}
