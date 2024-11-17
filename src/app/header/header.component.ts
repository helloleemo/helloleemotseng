
import { CommonModule } from '@angular/common';
import {  Component,  inject,  Input } from '@angular/core';

import { MatRippleModule } from '@angular/material/core';
import { RouterModule} from '@angular/router';
import { MouseService } from '../services/mouse.service';


interface menuItems {
  name: string;
  link: string;
}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule,MatRippleModule],
  templateUrl: './header.component.html',
 animations: [
  ]

}) 
export class HeaderComponent   {

  menuList:menuItems[] = [
    {
      name:"LeeMo",
      link:"/"
    },{
      name:"Platform",
      link:"/platform"
    },{
      name:"Articles",
      link:"/articles"
    },{
      name:`<p class="flex items-center"><i class="material-icons">download</i>Download<p>`,
      link:"/"
    }
  ]

  mouseService = inject(MouseService);
  // constructor(public mouseService:MouseService){
  // }
  selectedItem:string = "LeeMo";

  selectItem(item:string){
    this.selectedItem = item;
  }


}
