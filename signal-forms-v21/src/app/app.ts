import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicForm } from "./basic-form/basic-form";
import { Demo1 } from './demo1/demo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BasicForm, Demo1],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('signal-forms-v21');
}
