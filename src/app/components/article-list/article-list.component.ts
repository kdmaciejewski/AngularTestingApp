import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article.model';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-list.component.html',
  styles: [`
    .article-list {
      list-style: none;
      padding: 0;
    }

    .article-item {
      border: 1px solid #ddd;
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 4px;
    }

    .article-item h3 {
      margin-top: 0;
    }

    button {
      background-color: #e74c3c;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 3px;
      cursor: pointer;
    }

    button:hover {
      background-color: #c0392b;
    }
  `]

})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.articles$.subscribe(data => {
      this.articles = data;
    });
  }

  deleteArticle(id: number) {
    this.articleService.deleteArticle(id);
  }
}
