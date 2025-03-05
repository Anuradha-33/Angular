import { Component } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, HoverHighlightDirective, AutoFocusDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showContent = false;
  items = ['Apple', 'Banana', 'Cherry', 'Date'];
  isActive = true;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
