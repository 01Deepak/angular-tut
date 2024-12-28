import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  imports: [],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.scss'
})
export class StyleBindingComponent {
  color: string = 'red';
  bgColor: string = 'yellow';
  updateColor() {
    this.color = 'blue';
    this.bgColor = 'green';
  }
}
