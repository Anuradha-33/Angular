import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent],
  template: '<app-parent></app-parent>',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
