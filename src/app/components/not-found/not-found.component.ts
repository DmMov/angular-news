import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass']
})
export class NotFoundComponent implements OnInit {
  code: number = 404;
  error: string = `error (${this.code})`;
  title: string = 'sorry, we could not find the page you were looking for';

  constructor() { }

  ngOnInit() {
  }

}
