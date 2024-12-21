import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tut';

  onClick() {
    console.log('clicked');
  }
  userName: string = '';
  getInputValue(value: string) {
    console.log('value = ', value);
    this.userName = value;  
    
  }
}
