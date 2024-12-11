import { Component, } from '@angular/core';
import { ImgItems } from '../../../interface/img-items';
import { EnlargeableImgGroupComponent } from '../../../enlargeable-img-group/enlargeable-img-group.component';
// import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-open-area',
  standalone: true,
  imports: [EnlargeableImgGroupComponent],
  templateUrl: './open-area.component.html',
})
export class OpenAreaComponent {
  dynamicTitle: string = "Open Area";
  dynamicFooter: string = "Back to Space";
  // dynamicLinkBackTo: string = `${environment.linkBaseUrl}/space`;



  openAreaImgs: ImgItems[] = [{
    imgUrl: "monitor/space/Open-Area/P1103389.webp",
    name: "",
    descrioption: "",
    span: "col-span-2",
  },
  {
    imgUrl: "monitor/space/Open-Area/P1103438.webp",
    name: "",
    descrioption: "",
    span: "col-span-1",
  },
  {
    imgUrl: "monitor/space/Open-Area/P1103443.webp",
    name: "",
    descrioption: "",
    span: "col-span-1",
  },
  {
    imgUrl: "monitor/space/Open-Area/P1103446.webp",
    name: "",
    descrioption: "",
    span: "col-span-2",

  }, {
    imgUrl: "monitor/space/Open-Area/P1103455.webp",
    name: "",
    descrioption: "",
    span: "col-span-1",
  }, {
    imgUrl: "monitor/space/Open-Area/P1103466.webp",
    name: "",
    descrioption: "",
    span: "col-span-1",

  }
    , {
    imgUrl: "monitor/space/Open-Area/P1103467.webp",
    name: "",
    descrioption: "",
    span: "col-span-1",

  }

  ]
}
