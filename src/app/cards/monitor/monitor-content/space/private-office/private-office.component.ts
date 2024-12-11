import { Component,  } from '@angular/core';
import { EnlargeableImgGroupComponent } from '../../../enlargeable-img-group/enlargeable-img-group.component';

interface ImgItems {
    imgUrl: string,
    name: string,
    descrioption: string,
    span?: string,
}

@Component({
  selector: 'app-private-office',
  standalone: true,
  imports: [ EnlargeableImgGroupComponent],
  templateUrl: './private-office.component.html',

})

export class PrivateOfficeComponent {
  dynamicTitle: string = "Private Office";
  dynamicFooter: string = "Back to Space";
  // dynamicLinkBackTo: string = `${environment.linkBaseUrl}/space`;

  privateOfficeImgs: ImgItems[] = [{
    imgUrl: "monitor/space/Private-office/0923_4.webp",
    name: "",
    descrioption: "",
    span: "col-span-2",
  },
  {
    imgUrl: "monitor/space/Private-office/P1103405.webp",
    name: "",
    descrioption: "",
    span: "col-span-1",
  },
  {
    imgUrl: "monitor/space/Private-office/P1103588-HDR.webp",
    name: "",
    descrioption: "",
    span: "row-span-2",
  },
  {
    imgUrl: "monitor/space/Private-office/P1103590.webp",
    name: "",
    descrioption: "",
    span: "col-span-1",

  },  {
    imgUrl: "monitor/space/Private-office/S__219357186_0.webp",
    name: "",
    descrioption: "",
    span: "col-span-1",

  }, {
    imgUrl: "monitor/space/Private-office/P1103592-HDR.webp",
    name: "",
    descrioption: "",
    span: "col-span-1",
  }, {
    imgUrl: "monitor/space/Private-office/P1103594-HDR.webp",
    name: "",
    descrioption: "",
    span: "col-span-1",

  }

  ]



}
