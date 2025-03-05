import { Component } from '@angular/core';
import { GreetingsComponent } from './greetings/greetings.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GreetingsComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApplication';
  imageUrl: string = 'https://www.etatvasoft.com/blog/wp-content/uploads/2017/01/b-thumb-img12.jpg';
}
