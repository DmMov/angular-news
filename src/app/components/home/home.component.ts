import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title: string = 'last news';
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.Get('lastNews', 5);
  }

}
