import { Component, inject, OnInit } from '@angular/core';
import { MouseService } from '../../services/mouse.service';
import { ArticlesService } from '../../services/articles.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';


@Component({
  selector: 'app-devlog-intro',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './devlog-intro.component.html',

})
export class DevlogIntroComponent {
  intro: string = `  <p>
    Development is a lone-term journey, and it's important to keep learning.
  </p>
  <p>
    The following articles are some of the things I've learned and want to
    record.
  </p>
  <p>So that I can review them whenever I need them.</p>
  <p>
    For the reason, the categories of the articles are not only following the
    ragular structure but containing some of particular things that I need to
    record as a reference.
  </p>
  <p>
    If you have any questions or suggestions, please feel free to contact me.
  </p>
  <p>I'm looking forward to receiving your feedback.</p>
  <p class="font-medium">leemo.tseng gmail.com</p>
  `
  
}
