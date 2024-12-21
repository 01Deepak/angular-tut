import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
counter = 0;

increment() {
  this.counter++;
}
decrement() {
  if (this.counter > 0) {
    this.counter--;
  }
}
}
