import { Component } from '@angular/core';

import { EnlargeableImgGroupComponent } from "../../../enlargeable-img-group/enlargeable-img-group.component";
import { ImgItems } from '../../../interface/img-items';


@Component({
  selector: 'app-meeting-room',
  standalone: true,
  imports: [EnlargeableImgGroupComponent],
  templateUrl: './meeting-room.component.html',
})
export class MeetingRoomComponent {
  dynamicTitle: string = "Meeting Room";
  dynamicFooter: string = "Back to Space";
  // dynamicLinkBackTo: string = `${environment.linkBaseUrl}/space`;

  meetingRoomImgs: ImgItems[] = [{

    imgUrl: `monitor/space/Meeting-Room/P1103412.webp`,
    name: "",
    descrioption: "",
    span: "col-span-3",
  },
  {
    imgUrl: `monitor/space/Meeting-Room/P1103415.webp`,
    name: "",
    descrioption: "",
    span: "row-span-2",
  },
  {
    imgUrl: `monitor/space/Meeting-Room/P1103448.webp`,
    name: "",
    descrioption: "",
    span: "row-span-2 col-span-2",
  },
  ]

}
