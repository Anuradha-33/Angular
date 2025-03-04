import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-message',
  standalone: true,
  imports: [CommonModule], // ✅ Added CommonModule for *ngIf
  template: `
    <h2>Toggle Message</h2>
    <button (click)="toggle()">Toggle Message</button>
    <p *ngIf="isVisible">Hello! This is a toggled message.</p>
  `,
})
export class ToggleMessageComponent {
  isVisible = false;

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
