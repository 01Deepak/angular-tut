import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgSwitch, NgSwitchCase, NgSwitchDefault,NgFor } from '@angular/common';

@Component({
  selector: 'app-control-satatement',
  imports: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor],
  templateUrl: './control-satatement.component.html',
  styleUrl: './control-satatement.component.scss'
})
export class ControlSatatementComponent {
 isLogedIn = false;
 selectedColor = 'blue';
 users = ['John', 'Jane', 'Bob', 'Alice', 'Mike', 'Sarah'];

 selectColor(color: string) {
   this.selectedColor = color;
 }
}
