import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./component/counter/counter.component";
import { PropertyBindingComponent } from "./component/property-binding/property-binding.component";
import { ControlSatatementComponent } from "./component/control-satatement/control-satatement.component";
import { NestedLoopComponent } from "./component/nested-loop/nested-loop.component";
import { StyleBindingComponent } from "./component/style-binding/style-binding.component";
import { BasicFormComponent } from "./component/basic-form/basic-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, PropertyBindingComponent, ControlSatatementComponent, NestedLoopComponent, StyleBindingComponent, BasicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  
}
