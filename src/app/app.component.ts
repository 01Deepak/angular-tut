import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./component/counter/counter.component";
import { PropertyBindingComponent } from "./component/property-binding/property-binding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, PropertyBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  
}
