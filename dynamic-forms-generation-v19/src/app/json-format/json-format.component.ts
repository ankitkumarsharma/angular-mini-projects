import { Component } from '@angular/core';
import { DynamicFormComponent } from '../shared/dynamic-form/dynamic-form.component';
import { CommonModule } from '@angular/common';
import { DYNAMIC_FORM_CONFIG_DATA } from '../core/app.constant';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-json-format',
  imports: [DynamicFormComponent, CommonModule],
  templateUrl: './json-format.component.html',
  styleUrl: './json-format.component.scss'
})
export class JsonFormatComponent {
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
