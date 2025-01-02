import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  imports: [],
  templateUrl: './template-reference-variable.component.html',
  styleUrl: './template-reference-variable.component.scss'
})
export class TemplateReferenceVariableComponent {
  userName = '';
  handleClick(data: string) {
    console.log(data);
    this.userName = data;
  }
}
