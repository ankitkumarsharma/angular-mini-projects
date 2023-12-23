import { Component, OnInit, inject } from '@angular/core';
import { CARD_LIST, CARD_PANEL_LIST, CONTROL_LIST, LABELS } from '../core/app.constant';
import { CardListModel, ControlListModel } from '../core/app.models';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { DynamicFormsConfigModel } from '../shared/dynamic-form/core/dynamic-form.models';

@Component({
  selector: 'app-list-add-control-format',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list-add-control-format.component.html',
  styleUrl: './list-add-control-format.component.scss'
})
export class ListAddControlFormatComponent implements OnInit {
  private toastr = inject(ToastrService);
  cardList: CardListModel[] = CARD_LIST;
  noDataFound: string = LABELS.noDataFound;
  addCardFormGroup!: FormGroup;
  addCardFormGroupSubmitted!: boolean;
  cardEditIndex!: number;
  cardActiveIndex: number = 0;
  cardEditFlag!: boolean;
  dynamicCardFormGroup!: FormGroup;
  controlList: ControlListModel[] = CONTROL_LIST;
  cardPanelList: ControlListModel[] = CARD_PANEL_LIST;
  addControlFormGroup!: FormGroup;
  addControlFormGroupSubmitted!: boolean;
  controlEditIndex!: number;
  controlEditFlag!: boolean;
  ngOnInit(): void {
    this.initAddCardFormGroup();
    this.initAddControlFormGroup();
    this.initDynamicCardFormGroup();
  }
  // error validation part
  requiredErrorDescription(label: string) {
    return `${label} field is required`;
  }
  getControlRequiredError(control: string, form: FormGroup) {
    return form.controls[control].hasError('required');
  }
  getControlError(control: string, form: FormGroup) {
    return form.controls[control].errors;
  }
  // card add/edit
  initAddCardFormGroup() {
    this.addCardFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
    })
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
      this.cardActiveIndex = 0;
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
      this.cardList[this.cardEditIndex].name = this.addCardFormGroup.controls['name'].value;
      this.cardList[this.cardEditIndex].desc = this.addCardFormGroup.controls['desc'].value;
      this.cardEditFlag = false;
      this.cardActiveIndex = 0;
      this.resetAddCardFormGroup();
    } else {
      this.addCardFormGroup.markAllAsTouched();
    }

  }
  onCardDelete(index: number) {
    this.cardList.splice(index, 1);
  }
  onCardSelect(index: number) {
    this.cardActiveIndex = index;
  }
  // control add/edit
  toasterErrorMessage(message: string) {
    this.toastr.error(message);
  }
  initDynamicCardFormGroup() {
    this.dynamicCardFormGroup = new FormGroup({});
  }
  addControl(value: any) {
    if (this.cardList.length) {
      if (this.cardActiveIndex) {
        this.addControlFormGroupSubmitted = true;
        if (this.addControlFormGroup.valid) {
          let controls: any = this.cardList[this.cardActiveIndex - 1].controlsList;
          let control: any = {}
          control.label = value.label;
          control.name = value.name;
          control.type = value.type;
          controls = [...controls, control];
          this.dynamicCardFormGroup.addControl(value.name, new FormControl(''));
          this.cardList[this.cardActiveIndex - 1].controlsList = controls;
          this.resetAddControlFormGroup();
          this.cardActiveIndex = 0;
        } else {
          this.addControlFormGroup.markAllAsTouched();
        }
      } else {
        this.toasterErrorMessage(LABELS.errorMessage.panelNotSelected);
      }
    } else {
      this.toasterErrorMessage(LABELS.errorMessage.panelNotCreated);
    }
  }
  initAddControlFormGroup() {
    this.addControlFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      label: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    })
  }
  resetAddControlFormGroup() {
    this.addControlFormGroup.reset();
    this.addControlFormGroupSubmitted = false;
    this.addControlFormGroup.controls['type'].patchValue('');
  }
  onControlEdit(cardIndex: number, controlIndex: number) {
    this.controlEditFlag = true;
    this.controlEditIndex = controlIndex;
    this.cardEditIndex = cardIndex;
    let data = this.cardList[this.cardEditIndex].controlsList[this.controlEditIndex];
    this.addControlFormGroup.setValue(data);
    this.dynamicCardFormGroup.removeControl(data.name);
  }
  onControlUpdate() {
    this.addControlFormGroupSubmitted = true;
    if (this.addControlFormGroup.valid) {
      this.cardList[this.cardEditIndex].controlsList[this.controlEditIndex] = this.addControlFormGroup.value;
      this.dynamicCardFormGroup.addControl(this.addControlFormGroup.value.name, new FormControl(''));
      this.resetAddControlFormGroup();
      this.cardActiveIndex = 0;
      this.controlEditFlag = false;
    } else {
      this.addControlFormGroup.markAllAsTouched();
    }
  }
  onControlDelete(cardIndex: number, controlIndex: number) {
    let data = this.cardList[cardIndex].controlsList[controlIndex];
    this.dynamicCardFormGroup.removeControl(data.name);
    this.cardList[cardIndex].controlsList.splice(controlIndex, 1);
  }
}
