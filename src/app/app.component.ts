import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./component/counter/counter.component";
import { PropertyBindingComponent } from "./component/property-binding/property-binding.component";
import { ControlSatatementComponent } from "./component/control-satatement/control-satatement.component";
import { NestedLoopComponent } from "./component/nested-loop/nested-loop.component";
import { StyleBindingComponent } from "./component/style-binding/style-binding.component";
import { BasicFormComponent } from "./component/basic-form/basic-form.component";
import { TodoListComponent } from "./component/todo-list/todo-list.component";
import { DataShareComponent } from "./component/data-share/data-share.component";
import { TwoWayBindingComponent } from "./component/two-way-binding/two-way-binding.component";
import { TemplateReferenceVariableComponent } from "./component/template-reference-variable/template-reference-variable.component";
import { BasicPipeComponent } from "./component/pipes/basic-pipe/basic-pipe.component";
import { TemplateDrivenFormComponent } from "./component/forms/template-driven-form/template-driven-form.component";
import { ReactiveFormComponent } from "./component/forms/reactive-form/reactive-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, PropertyBindingComponent, ControlSatatementComponent, NestedLoopComponent, StyleBindingComponent, BasicFormComponent, TodoListComponent, DataShareComponent, TwoWayBindingComponent, TemplateReferenceVariableComponent, BasicPipeComponent, TemplateDrivenFormComponent, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  
}
