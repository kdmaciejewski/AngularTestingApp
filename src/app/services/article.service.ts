import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Article} from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = Array.from({length: 1000}, (_, i) => ({
    id: i + 1,
    title: `Article ${i + 1}`,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }));


  private articlesSubject = new BehaviorSubject<Article[]>(this.articles);
  articles$ = this.articlesSubject.asObservable();

  addArticle(article: Article) {
    this.articles.push(article);
    this.articlesSubject.next(this.articles);
  }

  getArticles(): Article[] {
    return this.articles;
  }

  deleteArticle(id: number) {
    this.articles = this.articles.filter(a => a.id !== id);
    this.articlesSubject.next(this.articles);
  }
}
