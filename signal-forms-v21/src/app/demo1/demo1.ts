import { Component, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-demo1',
  imports: [FormField],
  templateUrl: './demo1.html',
  styleUrl: './demo1.scss',
})
export class Demo1 {
  userModel = signal<UserModel>({
    name: '',
    email: '',
  });
  userForm = form(this.userModel, (path)=>{
    required(path.name, { message: 'Name is required'});
    required(path.email, { message: 'Email is required'});
    email(path.email, { message: 'Email is not valid'});
  });

  onSubmit() {
    console.log(this.userForm().value());
  }
}

export interface UserModel {
  name: string;
  email: string;
}
