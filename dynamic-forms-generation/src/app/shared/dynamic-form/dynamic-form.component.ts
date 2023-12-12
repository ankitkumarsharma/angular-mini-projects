import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicFormsConfigModel } from './core/dynamic-form.models';
import { CommonModule } from '@angular/common';
import { LABELS } from './core/dynamic-form.constant';

@Component({
  selector: 'dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
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
