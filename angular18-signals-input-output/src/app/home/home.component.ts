import { Component } from '@angular/core';
import { ProfileCheckComponent } from "../profile-check/profile-check.component";

@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ProfileCheckComponent]
})
export class HomeComponent {

}
