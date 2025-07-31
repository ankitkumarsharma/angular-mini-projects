import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RichTextEditor } from './rich-text-editor/rich-text-editor';

@Component({
  selector: 'app-root',
  imports: [RichTextEditor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-custom-rich-text-editor';
}
