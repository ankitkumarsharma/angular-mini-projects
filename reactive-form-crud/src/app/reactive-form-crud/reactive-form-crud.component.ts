import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ProfileFormValueModel } from './core/reactive-form-crud.models';

@Component({
  selector: 'app-reactive-form-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastrModule],
  templateUrl: './reactive-form-crud.component.html',
  styleUrl: './reactive-form-crud.component.scss'
})
export class ReactiveFormCrudComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  submitted!: boolean;
  tableData: ProfileFormValueModel[] = [];
  editFlag!: boolean;
  editIndex!: number;

  // name error methods
  getNameError() {
    return this.submitted && this.profileForm.controls.name.errors
  }
  getNameRequiredError() {
    return this.submitted && this.profileForm.controls.name.hasError('required');
  }
  // email error methods
  getEmailError() {
    return this.submitted && this.profileForm.controls.email.errors
  }
  getEmailRequiredError() {
    return this.submitted && this.profileForm.controls.email.hasError('required');
  }
  getEmailFormatError() {
    return this.submitted && this.profileForm.controls.email.hasError('email');
  }
  // mobile error methods
  getMobileError() {
    return this.submitted && this.profileForm.controls.mobile.errors
  }
  getMobileRequiredError() {
    return this.submitted && this.profileForm.controls.mobile.hasError('required');
  }
  // password error methods
  getPasswordError() {
    return this.submitted && this.profileForm.controls.password.errors
  }
  getPasswordRequiredError() {
    return this.submitted && this.profileForm.controls.password.hasError('required');
  }
  // confirm Password error methods
  getConfirmPasswordError() {
    return this.submitted && this.profileForm.controls.confirmPassword.errors
  }
  getConfirmPasswordRequiredError() {
    return this.submitted && this.profileForm.controls.confirmPassword.hasError('required');
  }
  // required message label
  requiredErrorDescription(label: string) {
    return `${label} field is required`;
  }

  onSubmit() {
    this.submitted = true;
    if (this.profileForm.valid) {
      this.tableData = [...this.tableData, this.profileForm.value];
      this.submitted = false;
      this.profileForm.reset();
    } else {
      this.profileForm.markAllAsTouched()
    }
  }

  onEdit(index: number) {
    this.editFlag = true;
    this.editIndex = index;
    let updateObj: any;
    let data: any = this.tableData[index];
    Object.keys(this.profileForm.value).map((itemParent) => {
      Object.keys(this.tableData[index]).map((itemChild) => {
        if (itemParent == itemChild) {
          updateObj = { ...updateObj, [itemParent]: data[itemParent] }
        }
      })
    })
    this.profileForm.setValue(updateObj);
  }

  onUpdate() {
    this.tableData[this.editIndex] = this.profileForm.value;
    this.editFlag = false;
    this.resetForm();
  }
  onDelete(index: number) {
    this.tableData.splice(index, 1);
  }
  resetForm() {
    this.profileForm.reset();
    this.submitted = false;
    this.editFlag = false;
  }
}
