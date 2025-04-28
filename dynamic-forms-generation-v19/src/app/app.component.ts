import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuListModel } from './core/app.models';
import { LABELS, MENU_LIST } from './core/app.constant';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './shared/contact/contact.component';
import { DynamicFormComponent } from './shared/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, ContactComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  menuList: MenuListModel[] = MENU_LIST;
  noDataFound: string = LABELS.noDataFound;
  title: string = LABELS.title;
}
