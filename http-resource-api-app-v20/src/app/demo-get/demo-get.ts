import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-demo-get',
  imports: [JsonPipe],
  templateUrl: './demo-get.html',
  styleUrl: './demo-get.scss'
})
export class DemoGet {
  getAllUsersUrl = 'https://jsonplaceholder.typicode.com/users';
  index = signal(1);
  userList = httpResource(() => `https://jsonplaceholder.typicode.com/users`);
  user = httpResource(() => `https://jsonplaceholder.typicode.com/users/${this.index()}`);
  constructor() {
    effect(() => {
      console.log("userList", this.userList);
    });
  }
}
