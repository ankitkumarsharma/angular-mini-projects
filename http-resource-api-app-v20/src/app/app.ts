import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('http-resource-api-app-v20');
  getAllUsersUrl = 'https://jsonplaceholder.typicode.com/users';
  getAllPostsUrl = 'https://jsonplaceholder.typicode.com/posts';
  index = signal(1);
  userList = httpResource(() => `https://jsonplaceholder.typicode.com/users`);
  constructor() {
    effect(() => {
      console.log("userList", this.userList);
    });
  }
}
