import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LABELS } from '../core/app.constant';
import { ErrorMessagesModel } from './core/dynamic-forms-with-array-format.models';
import { ERROR_MESSAGES } from './core/dynamic-forms-with-array-format.constant';

@Component({
  selector: 'app-dynamic-forms-with-array-format',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-forms-with-array-format.component.html',
  styleUrl: './dynamic-forms-with-array-format.component.scss'
})
export class DynamicFormsWithArrayFormatComponent {
  noDataFound: string = LABELS.noDataFound;
  cardForm!: FormGroup;
  currentName: string = '';
  errorMessage: ErrorMessagesModel = ERROR_MESSAGES;
  ngOnInit(): void {
    // step 2
    this.initCardForm();
    // step 7
    this.addCard();
  }
  // step 1
  initCardForm() {
    this.cardForm = new FormGroup({
      cardList: new FormArray([])
    })
  }
  // step 3
  getCardList() {
    return this.cardForm.get('cardList') as FormArray;
  }
  // step 4
  addNewControls() {
    // validation -- step 17
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      feature: new FormControl('', [Validators.maxLength(5), this.featureShouldPreNameValidator()]),
      category: new FormControl('', [Validators.required, Validators.pattern(LABELS.pattern.onlyChar)]),
    })
  }
  // step 5
  getCard(): FormGroup {
    return new FormGroup({
      card: new FormArray([this.addNewControls()])
    })
  }
  // step 6
  addCard() {
    this.getCardList().push(this.getCard());
  }
  // step 8
  removeCard(i: number) {
    this.getCardList().removeAt(i);
  }
  // step 9
  getCardGroup(i: number) {
    return this.getCardList().controls[i] as FormGroup
  }
  // step 10
  getControlList(i: number) {
    return this.getCardGroup(i).get('card') as FormArray;
  }
  // step 11
  addControls(i: number) {
    this.getControlList(i).push(this.addNewControls());
  }
  // step 12
  removeControls(i: number, j: number) {
    this.getControlList(i).removeAt(j);
  }
  // step 13
  onSubmit() {
    console.log(this.cardForm.value);
  }
  // step 14
  getControlGroup(i: number, j: number) {
    return this.getControlList(i).controls[j] as FormGroup;
  }
  // step 15
  getSingleControl(i: number, j: number, control: string) {
    return this.getControlGroup(i, j).controls[control];
  }
  // step 16
  getName(i: number, j: number) {
    this.currentName = this.getSingleControl(i, j, 'name').value;
  }
  // step 18
  getControlErrors(i: number, j: number, control: string) {
    return this.getSingleControl(i, j, control).invalid;
  }
  getControlHasError(i: number, j: number, control: string, error: string) {
    return this.getSingleControl(i, j, control).hasError(error)
  }
  // step 19
  featureShouldPreNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const feature = control.value;
      if (!feature) {
        return null;
      }
      let firstTwoCharName = this.currentName.slice(0, 2);
      return feature.indexOf(firstTwoCharName) == -1 ? { featureWithName: true } : null;
    }
  }
  // step 20
  editCard(i: number) {
    // code
  }
}
