import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LABELS, MENU_LIST } from './core/app.constant';
import { MenuListModel } from './core/app.models';
import { ContactComponent } from "./shared/contact/contact.component";
import { DynamicFormComponent } from "./shared/dynamic-form/dynamic-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ContactComponent, DynamicFormComponent,RouterModule]
})
export class AppComponent {
  menuList: MenuListModel[] = MENU_LIST;
  noDataFound:string = LABELS.noDataFound;
}
