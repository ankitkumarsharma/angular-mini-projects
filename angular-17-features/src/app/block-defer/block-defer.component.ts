import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-block-defer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './block-defer.component.html',
  styleUrl: './block-defer.component.scss'
})
export class BlockDeferComponent {
  onDataDefer(){
    return true
  }
}
