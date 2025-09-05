import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, Control } from '@angular/forms/signals';

@Component({
  selector: 'app-demo1',
  imports: [Control, JsonPipe],
  templateUrl: './demo1.html',
  styleUrl: './demo1.scss'
})
export class Demo1 {
  userModel = signal({ name: '', email: '' });
  userForm = form(this.userModel);

  onSubmit() {
    console.log("Form submitted: ", this.userForm().value());
  }
}
