import { Component, OnInit, Input } from '@angular/core';
import { IBitOfNews } from 'src/app/models/IBitOfNews';

@Component({
  selector: 'bit-of-news',
  templateUrl: './bit-of-news.component.html',
  styleUrls: ['./bit-of-news.component.sass']
})
export class BitOfNewsComponent implements OnInit {
  @Input() bitOfNews: IBitOfNews;
  constructor() { }

  ngOnInit() {
    this.bitOfNews.body = this.bitOfNews.body.slice(0, 100).trim() + '...'
  }

}
