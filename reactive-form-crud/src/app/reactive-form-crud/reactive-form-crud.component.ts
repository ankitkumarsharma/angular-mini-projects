import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form-crud.component.html',
  styleUrl: './reactive-form-crud.component.scss'
})
export class ReactiveFormCrudComponent {
  profileForm = new FormGroup({
    name : new FormControl('', Validators.required),
    contactNumber : new FormControl('', Validators.max(10)),
    email : new FormControl('', (Validators.required, Validators.email)),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  })
}
