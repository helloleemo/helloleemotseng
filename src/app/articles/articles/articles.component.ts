import { MouseService } from './../../services/mouse.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';

interface ArticleItem {
  id: number;
  category: string[];
  title: string;
  content: string;
  date: string;
}

interface ArticleTagsItem {
  id: number;
  name: string;
  link: string;
}
@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './articles.component.html',
})
export class ArticlesComponent {

  articleTags: ArticleTagsItem[] = [
    {
    id: 1,
    name: "Angular",
    link: "dffvs"
  },{
        id: 2,
    name: "Vue",
    link: "dffvs"
  },{
        id: 2,
    name: "Tailwind",
    link: "dffvs"
  },{
        id: 2,
    name: "JavaScript",
    link: "dffvs"
  },{
        id: 2,
    name: "Authentication",
    link: "dffvs"
  }
  
]

  articleList: ArticleItem[] = [
    {
      id: 1,
      category: ['Angular', 'Tailwind'],
      title: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsum',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt consequatur in sit est maxime saepe nulla molestias soluta cum, laborum hic ex totam doloribus nesciunt dignissimos nihil consequuntur numquam qui mollitia deleniti minima rem. Possimus, neque ad. Ut, maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt consequatur in sit est maxime saepe nulla molestias soluta cum, laborum hic ex totam doloribus nesciunt dignissimos nihil consequuntur numquam qui mollitia deleniti minima rem. Possimus, neque ad. Ut, maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt consequatur in sit est maxime saepe nulla molestias soluta cum, laborum hic ex totam doloribus nesciunt dignissimos nihil consequuntur numquam qui mollitia deleniti minima rem. Possimus, neque ad. Ut, maxime.',
      date: '2021-05-12'
    },
    {
      id: 2,
      category: ['Angular', 'Tailwind'],
      title: 'React 17',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt consequatur in sit est maxime saepe nulla molestias soluta cum, laborum hic ex totam doloribus nesciunt dignissimos nihil consequuntur numquam qui mollitia deleniti minima rem. Possimus, neque ad. Ut, maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt consequatur in sit est maxime saepe nulla molestias soluta cum, laborum hic ex totam doloribus nesciunt dignissimos nihil consequuntur numquam qui mollitia deleniti minima rem. Possimus, neque ad. Ut, maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt consequatur in sit est maxime saepe nulla molestias soluta cum, laborum hic ex totam doloribus nesciunt dignissimos nihil consequuntur numquam qui mollitia deleniti minima rem. Possimus, neque ad. Ut, maxime.',
      date: '2021-05-12'
    },
    {
      id: 3,
      category: ['Angular', 'Tailwind'],
      title: 'Vue 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt consequatur in sit est maxime saepe nulla molestias soluta cum, laborum hic ex totam doloribus nesciunt dignissimos nihil consequuntur numquam qui mollitia deleniti minima rem. Possimus, neque ad. Ut, maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt consequatur in sit est maxime saepe nulla molestias soluta cum, laborum hic ex totam doloribus nesciunt dignissimos nihil consequuntur numquam qui mollitia deleniti minima rem. Possimus, neque ad. Ut, maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt consequatur in sit est maxime saepe nulla molestias soluta cum, laborum hic ex totam doloribus nesciunt dignissimos nihil consequuntur numquam qui mollitia deleniti minima rem. Possimus, neque ad. Ut, maxime.',
      date: '2021-05-12'
    }
  ]

  mouseService = inject(MouseService);

}
