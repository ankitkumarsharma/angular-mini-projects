import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormComponent } from "../shared/dynamic-form/dynamic-form.component";
import { CommonModule } from '@angular/common';
import { DYNAMIC_FORM_CONFIG_DATA } from '../core/app.constant';

@Component({
    selector: 'app-json-format',
    standalone: true,
    templateUrl: './json-format.component.html',
    styleUrl: './json-format.component.scss',
    imports: [DynamicFormComponent, CommonModule]
})
export class JsonFormatComponent {
  title = 'dynamic-forms-generation';
  formConfig: any = DYNAMIC_FORM_CONFIG_DATA;
  formGroup!:FormGroup;


  onSubmit(event:any) {
    this.formGroup = event;
  }
  onFormSubmit(){
    if(this.formGroup.valid){
      // code
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
