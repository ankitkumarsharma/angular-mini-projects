import { Component, signal } from '@angular/core';
import { Demo1 } from "./demo1/demo1";

@Component({
  selector: 'app-root',
  imports: [Demo1],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('signal-forms-demo');
}
