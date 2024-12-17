import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor(private http: HttpClient) { }
  
  getArticleList(): Observable<any> { return this.http.get('articles/article-list.json') }
  getAllArticles(): Observable<any> { return this.http.get('articles/all-articles.json') }
  getAllArticlesEng(): Observable<any> { return this.http.get('articles/all-articles-eng.json') }

}
