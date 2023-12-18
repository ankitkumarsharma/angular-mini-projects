import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ProfileFormValueModel } from './core/reactive-form-crud.models';
import { REGX_PATTERN } from './core/reactive-form-crud.constant';

@Component({
  selector: 'app-reactive-form-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastrModule],
  templateUrl: './reactive-form-crud.component.html',
  styleUrl: './reactive-form-crud.component.scss'
})
export class ReactiveFormCrudComponent implements OnInit {
  mobileNumberValidation: string = REGX_PATTERN.mobileNumberValidation;
  profileForm!: FormGroup;
  submitted!: boolean;
  tableData: ProfileFormValueModel[] = [];
  editFlag!: boolean;
  editIndex!: number;

  ngOnInit(): void {
    this.initProfileForm();
  }

  initProfileForm() {
    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required, Validators.pattern(this.mobileNumberValidation)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    },
      { validators: this.confirmPasswordValidator('password', 'confirmPassword') }
    );
  }
  // error validations methods
  getControlError(control: string) {
    return this.submitted && this.profileForm.controls[control].errors
  }
  getControlRequiredError(control: string, error: string) {
    return this.submitted && this.profileForm.controls[control].hasError(error);
  }
  getConfirmPasswordNotMatchError() {
    return this.submitted && this.profileForm.hasError('passwordNoMatch');
  }
  confirmPasswordValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (abstractControl: AbstractControl) => {
      const control = abstractControl.get(controlName);
      const matchingControl = abstractControl.get(matchingControlName);

      if (matchingControl!.errors && !matchingControl!.errors?.['passwordNoMatch']) {
        return null;
      }
      if (control!.value !== matchingControl!.value) {
        const error = { passwordNoMatch: true };
        matchingControl!.setErrors(error);
        return error;
      } else {
        matchingControl!.setErrors(null);
        return null;
      }
    }
  }
  requiredErrorDescription(label: string) {
    return `${label} field is required`;
  }
  // form part
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
    this.submitted = true;
    if (this.profileForm.valid) {
      this.tableData[this.editIndex] = this.profileForm.value;
      this.resetForm();
    } else {
      this.profileForm.markAllAsTouched()
    }
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
