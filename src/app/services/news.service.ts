import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IBitOfNews } from '../models/IBitOfNews';
import { newsUrl } from 'src/assets/urls';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  lastNews: IBitOfNews[];
  allNews: IBitOfNews[];

  constructor(private http: HttpClient) { }

  Get = (setProp: string, limit?: string, search?: string): void => {
    const optional = `?limit=${limit}&search=${search}`;
    this.http
      .get(newsUrl + optional)
      .subscribe((res: { news: IBitOfNews[] }) => this[setProp] = res.news);
  }
}
