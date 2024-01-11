import { Component, OnInit } from '@angular/core';
import { LABELS } from '../core/app.constant';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms-with-array-format',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-forms-with-array-format.component.html',
  styleUrl: './dynamic-forms-with-array-format.component.scss'
})
export class DynamicFormsWithArrayFormatComponent implements OnInit {
  noDataFound: string = LABELS.noDataFound;
  cardForm!: FormGroup;

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
    return new FormGroup({
      name: new FormControl(''),
      feature: new FormControl(''),
      category: new FormControl(''),
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
    console.log(this.cardForm.value)
  }
}
