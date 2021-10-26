import { Component, OnInit } from '@angular/core';

declare var paypal;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'carrito-frontend-angular';

  ngOnInit(): void {}
  constructor() {}
}
