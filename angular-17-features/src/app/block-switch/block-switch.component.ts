import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitAppleComponent } from "./fruit-apple/fruit-apple.component";
import { FruitMangoComponent } from "./fruit-mango/fruit-mango.component";
import { FruitOthersComponent } from "./fruit-others/fruit-others.component";

@Component({
    selector: 'app-block-switch',
    standalone: true,
    templateUrl: './block-switch.component.html',
    styleUrl: './block-switch.component.scss',
    imports: [CommonModule, FruitAppleComponent, FruitMangoComponent, FruitOthersComponent]
})
export class BlockSwitchComponent {
  fruit:string = 'apple';
}
