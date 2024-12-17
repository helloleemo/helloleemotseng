import { Component, HostListener, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MouseService } from '../../services/mouse.service';

interface tags {
  name: string;
  children?: tags[];
}

const TREE_DATA: tags[] = [
  {
    name: 'Angular',
    children: [
      { name: 'Data emit' }, 
      { name: 'Components' },
    ]
  },
  {
    name: 'JavaScript',
    children: [
      {
        name: 'Green',
        children: [{
          name: 'Broccoli'
        },
        {
          name: 'Brussels sprouts'
        }],
      },
      {
        name: 'Orange',
        children: [{
          name: 'Pumpkins'
        },
        { 
          name: 'Carrots' }],
      },
    ],
  },
];

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MatTreeModule, MatIcon],
  templateUrl: './side-menu.component.html',
  styles: [`
    element.style {
      padding-left:10px;
    }
    .mat-tree{
      background-color: transparent;
    }
    .mat-tree-node, .mat-nested-tree-node{
      color: #5b5b5b;
      font-size: 14px;
      font-weight: 500;
      min-height:35px;
      &:hover{
        color: #888;
      }
    }
    
    
    `]
})
export class SideMenuComponent {

  mouseService = inject(MouseService);
  
  dataSource = TREE_DATA;

  childrenAccessor = (node: tags) => node.children ?? [];
  hasChild = (_: number, node: tags) => !!node.children && node.children.length > 0;

  isShowSideMenu: boolean = false;

  toggleSideMenu() {
    this.isShowSideMenu = !this.isShowSideMenu;
    console.log(this.isShowSideMenu);
  }

}
