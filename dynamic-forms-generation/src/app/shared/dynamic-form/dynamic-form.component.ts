import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsConfigModel } from './core/dynamic-form.models';

@Component({
  selector: 'dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  dynamicForm = new FormGroup({});
  @Input() formConfig!:DynamicFormsConfigModel[];
  @Output() onSubmit:EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.initDynamicForm();
  }

  initDynamicForm(){
    if(this.formConfig) {
      this.formConfig.forEach((control)=> {
        this.dynamicForm.addControl(control.name, new FormControl('',[]))
      });
    }
    this.onSubmit.emit(this.dynamicForm);
  }
  
}
