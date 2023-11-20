import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BlockIfComponent } from "./block-if/block-if.component";
import { BlockSwitchComponent } from "./block-switch/block-switch.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, BlockIfComponent, BlockSwitchComponent]
})
export class AppComponent {
  title = 'Angular v17';
}
