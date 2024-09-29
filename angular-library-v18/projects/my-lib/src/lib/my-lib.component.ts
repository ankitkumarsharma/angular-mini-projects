import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  imports: [],
  template: `
    <p>
      my-lib works!
    </p>
    <p><strong>{{name()}}</strong></p>
  `,
  styles: ``
})
export class MyLibComponent {
  name = input<string>()
}
