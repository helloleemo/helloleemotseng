import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface platformItems {
  name: string;
  description: string;
}
interface tagItems{
  id: number;
  name: string; 
  description: string;
}

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.css'
})
export class PlatformComponent {
  title = 'platform';

  // Data list
  platformList: platformItems[] = [
    {
      name: "item1",
      description: "description1"
    }, 
    {
      name: "item2",
      description: "description1"
    }, 
    {
      name: "item2",
      description: "description1"
    }, 
    {
      name: "item2",
      description: "description1"
    }, 
    {
      name: "item2",
      description: "description1"
    }, 
    {
      name: "item2",
      description: "description1"
    }, 
    {
      name: "item2",
      description: "description1"
    }
  ]
  tagList:tagItems[]=[
    {
      id: 1,
      name: "tag1tag1tag1",
      description: "description1"
    },{
      id: 2,
      name: "tag2",
      description: "description1"
    },{
      id: 3,
      name: "tag3",
      description: "description1"
    },{
      id: 4,
      name: "tag4",
      description: "description1"
    },
  ]



}
