import {Component, OnInit, Input} from '@angular/core';
import {Article} from '../Article';


@Component({
  selector: 'ng-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  @Input() articles: Article;
  @Input() type: string; // user or home

  constructor() {
  }

  ngOnInit() {
  }

}
