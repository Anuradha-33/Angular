import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component'; 
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { ReversePipe } from './reverse.pipe'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReversePipe, ParentComponent, LifecycleDemoComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject-DPNL';
  isVisible = true;
  items = ['Apple', 'Mango', 'Orange'];
  currentDate = new Date();

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
