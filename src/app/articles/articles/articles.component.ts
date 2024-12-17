import { MouseService } from './../../services/mouse.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ArticlesService } from '../../services/articles.service';
import { MatIcon } from '@angular/material/icon';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { IntroComponent } from "../../intro/intro.component";
import { RouterOutlet } from '@angular/router';
import { DevlogIntroComponent } from '../devlog-intro/devlog-intro.component';


@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, SideMenuComponent, DevlogIntroComponent],
  templateUrl: './articles.component.html',
  
})
export class ArticlesComponent  {


}
