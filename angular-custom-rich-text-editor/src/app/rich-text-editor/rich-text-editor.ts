import { Component } from '@angular/core';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.html',
  styleUrl: './rich-text-editor.scss'
})
export class RichTextEditor {
  content: string = '';

  format(command: string) {
    document.execCommand(command, false, '');
  }

  onInput() {
    const editor = document.querySelector('.editor') as HTMLElement;
    this.content = editor.innerHTML;
  }
}
