import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-block-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './block-for.component.html',
  styleUrl: './block-for.component.scss'
})
export class BlockForComponent {
  items:number[] = [2,4,3,6,5,1];
}
