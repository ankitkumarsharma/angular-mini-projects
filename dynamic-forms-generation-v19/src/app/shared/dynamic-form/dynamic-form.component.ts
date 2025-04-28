import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LABELS } from './core/dynamic-form.constant';
import { DynamicFormsConfigModel } from './core/dynamic-form.models';

@Component({
  selector: 'dynamic-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  dynamicForm = new FormGroup({});
  @Input() formConfig!:DynamicFormsConfigModel[];
  @Output() onSubmit:EventEmitter<any> = new EventEmitter();
  noFormData:string = LABELS.noFormData;
  ngOnInit(): void {
    this.initDynamicForm();
  }

  initDynamicForm(){
    if(this.formConfig) {
      this.formConfig.forEach((control)=> {
        let validators:any = [];
        control.validations?.forEach((validation)=>{
          validators = [...validators, Validators[validation.validator]]
        })
        this.dynamicForm.addControl(control.name, new FormControl('',validators))
      });
    }
    this.onSubmit.emit(this.dynamicForm);
  }
  
  isValid(control:any) {
    return this.dynamicForm.get(control.name)?.invalid && this.dynamicForm.get(control.name)?.touched;
  }

  getErrorMessage(control:any){
    const formControl = this.dynamicForm.get(control.name);
    for(let validation of control.validations) {
      if(formControl?.hasError(validation.name)){
        return validation.message;
      }
    }
    return '';
  }
}
