import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
  handleLoginSubmit(form: any) {
    if (form.valid) {
      console.log("form is valid = ", form.value);
    }else {
      console.log("form is invalid = ", form.value);
    }
  }

  checkLogs(data: any) {
    console.log("logs = ",data.errors);
  }
}
