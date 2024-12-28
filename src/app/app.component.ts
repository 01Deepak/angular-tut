import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./component/counter/counter.component";
import { PropertyBindingComponent } from "./component/property-binding/property-binding.component";
import { ControlSatatementComponent } from "./component/control-satatement/control-satatement.component";
import { NestedLoopComponent } from "./component/nested-loop/nested-loop.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, PropertyBindingComponent, ControlSatatementComponent, NestedLoopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  
}
