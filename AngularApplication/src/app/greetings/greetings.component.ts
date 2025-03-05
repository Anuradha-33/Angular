import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent {
  message: string = 'Hello, Angular!';
  imageUrl: string = 'https://www.etatvasoft.com/blog/wp-content/uploads/2017/01/b-thumb-img12.jpg';
  name: string = ''; 

  onClick() {
    alert('Button clicked!');
  }
}
