import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true, // Ensure this is included
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  title = 'Welcome to Angular!';
}
