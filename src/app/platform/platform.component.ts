import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, inject, Injectable, OnInit } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MouseService } from '../services/mouse.service';


interface platformItems {
  category: string[];
  name: string;
  description: string;
  linkto?: string;
}
interface tagItems {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [CommonModule, MatRipple],
  templateUrl: './platform.component.html',
})
export class PlatformComponent implements OnInit {
  title = 'platform';
  mouseService = inject(MouseService);
  http = inject(HttpClient);
  // constructor(public mouseService:MouseService){}


  // Data list
  platformList: platformItems[] = [];
  
  ngOnInit(){
    this.http.get<platformItems[]>('/assets/json/platformItems.json')
    .subscribe(data=>{
      this.platformList = data;},
      error =>{
        console.log("Error", error);
      }
    
    );
  }

  tagList: tagItems[] = [
    {
      id: 5,
      name: "All",
      description: "description1"
    }, {
      id: 1,
      name: "Product",
      description: "description1"
    }, {
      id: 2,
      name: "Toolkit",
      description: "description1"
    }, {
      id: 3,
      name: "Graphics",
      description: "description1"
    }, {
      id: 4,
      name: "UIUX",
      description: "description1"
    }, {
      id: 4,
      name: "Challenge",
      description: "description1"
    }
  ]

  selectedTag:string = "All";

  selectTag(tag:string){
    this.selectedTag = tag;
    // console.log(this.selectedTag);
  }
  filteredPlatformList():platformItems[]{
    if (this.selectedTag === "All"){
      return this.platformList;
    }
    return this.platformList.filter(item =>
      item.category.includes(this.selectedTag)
    );
  }





}
