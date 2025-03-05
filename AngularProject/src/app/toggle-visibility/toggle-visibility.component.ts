import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-visibility',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-visibility.component.html',
  styleUrls: ['./toggle-visibility.component.css']
})
export class ToggleVisibilityComponent {
  isVisible = false;
  isSpecial = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleSpecial() {
    this.isSpecial = !this.isSpecial;
  }
}
