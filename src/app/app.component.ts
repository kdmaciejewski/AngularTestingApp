import {Component} from '@angular/core';
import {ArticleFormComponent} from './components/article-form/article-form.component';
import {ArticleListComponent} from './components/article-list/article-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArticleFormComponent, ArticleListComponent],
  template: `
    <div class="container">
      <h1>📰 My Articles</h1>
      <app-article-form></app-article-form>
      <app-article-list></app-article-list>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 2rem;
      background-color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }
  `],

})
export class AppComponent {
}
