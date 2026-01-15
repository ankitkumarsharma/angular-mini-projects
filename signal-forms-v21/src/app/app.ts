import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicForm } from "./basic-form/basic-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BasicForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('signal-forms-v21');
}
