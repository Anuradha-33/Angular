import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css']
})
export class LifecycleDemoComponent implements OnInit, OnDestroy {
  count = 0;

  constructor() {
    console.log('Constructor: Component created');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component initialized');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component about to be destroyed');
  }

  increment() {
    this.count++;
  }
}
