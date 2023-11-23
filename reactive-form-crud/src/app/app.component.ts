import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from "./shared/contact/contact.component";
import { ReactiveFormCrudComponent } from "./reactive-form-crud/reactive-form-crud.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, ContactComponent, ReactiveFormCrudComponent]
})
export class AppComponent {
  title = 'reactive-form-crud';
}
