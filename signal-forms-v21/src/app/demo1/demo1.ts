import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

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
  userForm = form(this.userModel);

  onSubmit() {
    console.log(this.userForm().value());
  }
}

export interface UserModel {
  name: string;
  email: string;
}
