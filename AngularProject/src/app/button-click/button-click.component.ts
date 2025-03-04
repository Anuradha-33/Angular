import { Component } from '@angular/core';

@Component({
  selector: 'app-button-click',
  standalone: true,
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css']
})
export class ButtonClickComponent {
  message = '';

  handleClick() {
    this.message = 'Button was clicked!';
  }
}
