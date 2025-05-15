import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-form.component.html',
  styles: [`
    .form {
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    input, textarea {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 3px;
      font-size: 1rem;
    }

    button {
      align-self: flex-start;
      background-color: #3498db;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 3px;
      cursor: pointer;
    }

    button:hover {
      background-color: #2980b9;
    }
  `]

})
export class ArticleFormComponent {
  title = '';
  content = '';

  constructor(private articleService: ArticleService) {
  }

  onSubmit() {
    if (!this.title.trim() || !this.content.trim()) return;

    const id = Date.now();
    this.articleService.addArticle({id, title: this.title, content: this.content});

    this.title = '';
    this.content = '';
  }
}
