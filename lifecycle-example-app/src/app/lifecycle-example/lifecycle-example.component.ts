import { Component, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle-example.component.html',
  styleUrls: ['./lifecycle-example.component.css']
})
export class LifecycleExampleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  count: number = 0;
  parentMessage: string = 'Initial Parent Message';

  constructor() {
    console.log('Constructor: Component created');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: Input properties changed', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component initialized');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Change detection cycle executed');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: Content initialized');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: Content checked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: View initialized');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: View checked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component about to be destroyed');
  }

  increment() {
    this.count++;
    this.parentMessage = `Updated Parent Message at count: ${this.count}`;
  }
}
