import { Component, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';
import { LoginModel } from '../core/app.models';

@Component({
  selector: 'app-basic-form',
  imports: [FormField],
  templateUrl: './basic-form.html',
  styleUrl: './basic-form.scss',
})
export class BasicForm {
  loginModel = signal<LoginModel>({
    email: '',
    password: ''
  });

  loginForm = form(this.loginModel, (path)=>{
    required(path.email, {message: 'Email is required'});
    email(path.email, {message: 'Enter a valid email address'});

    required(path.password, {message: 'Password is required'});
  });

  onSubmit(){
    submit(this.loginForm, async ()=>{
      console.log("form...", this.loginForm().value())
    })
  }  
}
