import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-demo-post',
  imports: [JsonPipe],
  templateUrl: './demo-post.html',
  styleUrl: './demo-post.scss'
})
export class DemoPost {
  getAllPostsUrl = 'https://jsonplaceholder.typicode.com/posts';
  index = signal(1);
  postList = httpResource(() => ({
    url: this.getAllPostsUrl,
    method: 'GET',
    headers: {
      'X-Special': 'true',
    },
    params: {
      'fast': 'yes',
    },
    reportProgress: true,
    transferCache: true,
    keepalive: true,
    mode: 'cors',
    redirect: 'error',
    priority: 'high',
    cache: 'force-cache',
    credentials: 'include',
    referrer: 'no-referrer',
    integrity: 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GhEXAMPLEKEY='
  }));

  post = httpResource(() => ({
    url: this.getAllPostsUrl,
    method: 'PUT',
    headers: {
      'X-Special': 'true',
    },
    params: {
      'id': this.index(),
    },
    reportProgress: true,
    transferCache: true,
    keepalive: true,
    mode: 'cors',
    redirect: 'error',
    priority: 'high',
    cache: 'force-cache',
    credentials: 'include',
    referrer: 'no-referrer',
    integrity: 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GhEXAMPLEKEY='
  }));
}
