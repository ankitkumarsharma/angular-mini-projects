import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-block-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './block-if.component.html',
  styleUrl: './block-if.component.scss'
})
export class BlockIfComponent {
  age:number = 10;
}
