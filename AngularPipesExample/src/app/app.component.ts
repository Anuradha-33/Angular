import { Component } from '@angular/core';
import { DatePipe, CurrencyPipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { TitleCasePipe } from './title-case.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentDate = new Date();
  price = 12345.6789;
  message = 'hello angular world';
}
