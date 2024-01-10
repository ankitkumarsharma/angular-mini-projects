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
    this.initCardForm();
    this.addCard();
  }

  initCardForm() {
    this.cardForm = new FormGroup({
      cardList: new FormArray([])
    })
  }

  getCardList() {
    return this.cardForm.get('cardList') as FormArray;
  }

  addNewControls() {
    return new FormGroup({
      name: new FormControl(''),
      feature: new FormControl(''),
      category: new FormControl(''),
    })
  }

  getCard(): FormGroup {
    return new FormGroup({
      card: new FormArray([this.addNewControls()])
    })
  }

  getCardGroup(i: number) {
    return this.getCardList().controls[i] as FormGroup
  }

  getControlList(i: number) {
    return this.getCardGroup(i).get('card') as FormArray;
  }

  addControls(i: number) {
    this.getControlList(i).push(this.addNewControls());
  }

  removeControls(i: number, j: number) {
    this.getControlList(i).removeAt(j);
  }

  addCard() {
    this.getCardList().push(this.getCard());
  }

  removeCard(i: number) {
    this.getCardList().removeAt(i);
  }

  onSubmit() {
    console.log(this.cardForm.value)
  }
}
