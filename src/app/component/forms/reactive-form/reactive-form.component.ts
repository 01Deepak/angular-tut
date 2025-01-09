import { Component } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  loginForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
  })

  handleSubmit(form:any) {
    console.log(form.value);
  }
}
