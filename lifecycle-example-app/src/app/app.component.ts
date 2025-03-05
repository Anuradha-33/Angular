import { Component } from '@angular/core';
import { LifecycleExampleComponent } from './lifecycle-example/lifecycle-example.component';
import { LifecycleExampleDirective } from './lifecycle-example.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LifecycleExampleComponent, LifecycleExampleDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLifecycleExample = true;

  toggleComponent() {
    this.showLifecycleExample = !this.showLifecycleExample;
  }
}
