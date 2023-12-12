import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from "./shared/contact/contact.component";
import { DynamicFormComponent } from "./shared/dynamic-form/dynamic-form.component";
import { DYNAMIC_FORM_CONFIG_DATA } from './shared/dynamic-form/core/dynamic-form.constant';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ContactComponent, DynamicFormComponent]
})
export class AppComponent {
  title = 'dynamic-forms-generation';
  formConfig: any = DYNAMIC_FORM_CONFIG_DATA;
  formGroup!:FormGroup;


  onSubmit(event:any) {
    this.formGroup = event;
  }
  onFormSubmit(){
    console.log(this.formGroup.value)
  }
}
