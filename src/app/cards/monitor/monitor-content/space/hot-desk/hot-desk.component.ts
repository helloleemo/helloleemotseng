import { Component } from '@angular/core';
import { EnlargeableImgGroupComponent } from "../../../enlargeable-img-group/enlargeable-img-group.component";
import { ImgItems } from '../../../interface/img-items';


@Component({
  selector: 'app-hot-desk',
  standalone: true,
  imports: [EnlargeableImgGroupComponent],
  templateUrl: './hot-desk.component.html',
})
export class HotDeskComponent {

  dynamicTitle:string = "Hot Desk";
  dynamicFooter:string = "Back to Space";
  dynamicLinkBackTo:string = "/monitor/space";
    hotDeskImgs: ImgItems[] = [{
    imgUrl: "monitor/space/Hot-Desk/booth-desk_1.webp",
    name: "",
    descrioption: "",
    span: "col-span-2",
  },
  {
    imgUrl: "monitor/space/Hot-Desk/booth-desk_2.webp",
    name: "",
    descrioption: "",
    span: "col-span-1",
  },
  {
    imgUrl: "monitor/space/Hot-Desk/Hot-Desk.webp",
    name: "",
    descrioption: "",
    span: "row-span-2",
  },
  {
    imgUrl: "monitor/space/Hot-Desk/P1103385.webp",
    name: "",
    descrioption: "",
    span: "col-span-2",

  }, {
    imgUrl: "monitor/space/Hot-Desk/P1103465.webp",
    name: "",
    descrioption: "",
    span: "col-span-2",
  }, 
  ]

}
