import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-reactive-form-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastrModule],
  templateUrl: './reactive-form-crud.component.html',
  styleUrl: './reactive-form-crud.component.scss'
})
export class ReactiveFormCrudComponent {
  profileForm = new FormGroup({
    name : new FormControl('', Validators.required),
    mobile : new FormControl('', (Validators.required, Validators.max(10))),
    email : new FormControl('', (Validators.required, Validators.email)),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  submitted!:boolean;
  // name error methods
  getNameError(){
    return this.submitted && this.profileForm.controls.name.errors
  }
  getNameRequiredError(){
    return this.submitted && this.profileForm.controls.name.hasError('required');
  }
  // email error methods
  getEmailError(){
    return this.submitted && this.profileForm.controls.email.errors
  }
  getEmailRequiredError(){
    return this.submitted && this.profileForm.controls.email.hasError('required');
  }
  getEmailFormatError(){
    return this.submitted && this.profileForm.controls.email.hasError('email');
  }
  // mobile error methods
  getMobileError(){
    return this.submitted && this.profileForm.controls.mobile.errors
  }
  getMobileRequiredError(){
    return this.submitted && this.profileForm.controls.mobile.hasError('required');
  }
  getMobileMaxLengthError(){
    return this.submitted && this.profileForm.controls.mobile.hasError('max');
  }
  // password error methods
  getPasswordError(){
    return this.submitted && this.profileForm.controls.password.errors
  }
  getPasswordRequiredError(){
    return this.submitted && this.profileForm.controls.password.hasError('required');
  }
  // confirm Password error methods
  getConfirmPasswordError(){
    return this.submitted && this.profileForm.controls.confirmPassword.errors
  }
  getConfirmPasswordRequiredError(){
    return this.submitted && this.profileForm.controls.confirmPassword.hasError('required');
  }
  // required message label
  requiredErrorDescription(label:string){
    return `${label} field is required`;
  }

  onSubmit(){}
  resetForm(){}
}
