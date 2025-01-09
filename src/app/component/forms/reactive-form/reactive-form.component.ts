import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  loginForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    password: new FormControl("",Validators.required),
  })

  get name(){
    return this.loginForm.get('name');
  }
  get password(){
    return this.loginForm.get('password');
  }

  checkLogs(data: any) {
    console.log("logs = ",data);
  }

  handleSubmit(form:any) {
    console.log(form.value);
  }
}
