
import { CommonModule } from '@angular/common';
import {  Component,  Input } from '@angular/core';

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
      name:"listlistlistlist",
      link:"/"
    },{
      name:"listlistlist",
      link:"/platform"
    },{
      name:"list",
      link:""
    },{
      name:"list",
      link:""
    }
  ]

  constructor(public mouseService:MouseService){

  }

  selectedItem:string = "listlistlistlist";

  selectItem(item:string){
    this.selectedItem = item;
  }


}
