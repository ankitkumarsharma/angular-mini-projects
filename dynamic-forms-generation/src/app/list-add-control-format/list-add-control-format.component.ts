import { Component, OnInit } from '@angular/core';
import { CARD_LIST, LABELS } from '../core/app.constant';
import { CardListModel } from '../core/app.models';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-add-control-format',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list-add-control-format.component.html',
  styleUrl: './list-add-control-format.component.scss'
})
export class ListAddControlFormatComponent implements OnInit {
  cardList: CardListModel[] = CARD_LIST;
  noDataFound: string = LABELS.noDataFound;
  addCardFormGroup!: FormGroup;
  addCardFormGroupSubmitted!: boolean;
  cardEditIndex!: number;
  cardEditFlag!: boolean;
  ngOnInit(): void {
    this.initAddCardFormGroup();
  }
  // card add/edit
  initAddCardFormGroup() {
    this.addCardFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
    })
  }
  getCardNameRequiredError() {
    return this.addCardFormGroupSubmitted && this.addCardFormGroup.controls['name'].hasError('required');
  }
  getCardNameError() {
    return this.addCardFormGroupSubmitted && this.addCardFormGroup.controls['name'].errors;
  }
  getCardDescError() {
    return this.addCardFormGroupSubmitted && this.addCardFormGroup.controls['desc'].errors;
  }
  getCardDescRequiredError() {
    return this.addCardFormGroupSubmitted && this.addCardFormGroup.controls['desc'].hasError('required');
  }
  requiredErrorDescription(label: string) {
    return `${label} field is required`;
  }
  resetAddCardFormGroup() {
    this.addCardFormGroup.reset();
    this.addCardFormGroupSubmitted = false;
  }
  addCard(value: any) {
    this.addCardFormGroupSubmitted = true;
    if (this.addCardFormGroup.valid) {
      value = { ...value, controlsList: [] }
      this.cardList = [...this.cardList, value];
      this.resetAddCardFormGroup();
    } else {
      this.addCardFormGroup.markAllAsTouched();
    }
  }
  onCardEdit(index: number) {
    this.cardEditFlag = true;
    this.cardEditIndex = index;
    let updateObj: any;
    let data: any = this.cardList[index];
    Object.keys(this.addCardFormGroup.value).map((itemParent) => {
      Object.keys(this.cardList[index]).map((itemChild) => {
        if (itemParent == itemChild) {
          updateObj = { ...updateObj, [itemParent]: data[itemParent] }
        }
      })
    })
    this.addCardFormGroup.setValue(updateObj);
  }
  onCardUpdate() {
    this.addCardFormGroupSubmitted = true;
    if (this.addCardFormGroup.valid) {
      this.cardList[this.cardEditIndex] = this.addCardFormGroup.value;
      this.cardEditFlag = false;
      this.resetAddCardFormGroup();
    } else {
      this.addCardFormGroup.markAllAsTouched();
    }

  }
  onCardDelete(index: number) {
    this.cardList.splice(index, 1);
  }
}
