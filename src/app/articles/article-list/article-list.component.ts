import { Component, inject, OnInit } from '@angular/core';
import { MouseService } from '../../services/mouse.service';
import { ArticlesService } from '../../services/articles.service';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
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
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './article-list.component.html',
    styles: [`
      .material-symbols-outlined {
      font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24
    }`]
})
export class ArticleListComponent implements OnInit {
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
  mouseService = inject(MouseService);
  articleService = inject(ArticlesService);

  articleList: ArticleItem[] = [];
  articleTags: ArticleTagsItem[] = [
    {
      id: 1,
      name: "Angular",
      link: "11"
    }
  ]

  ngOnInit() {
    this.getArticleList();
    this.getAllArticles();
  }

  getArticleList(): void {
    this.articleService.getArticleList().subscribe({
      next: (res) => {
        this.articleList = res;
        // console.log(this.articleList);
      },
      error: (err) => { console.log(err) },
      complete: () => { }
    })
  }

  getAllArticles(): void {
    this.articleService.getAllArticles().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => { console.log(err) },
      complete: () => { }
    })
  }

}
