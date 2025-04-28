import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LABELS } from '../core/app.constant';
import { CardListModel } from './core/static-add-control-format.models';
import { CARD_LIST } from './core/static-add-control-format.constant';

@Component({
  selector: 'app-static-add-control-format',
  imports: [CommonModule],
  templateUrl: './static-add-control-format.component.html',
  styleUrl: './static-add-control-format.component.scss'
})
export class StaticAddControlFormatComponent {
  noDataFound: string = LABELS.noDataFound;
  cardList: CardListModel[] = CARD_LIST;
  allDetailsFlag!:boolean;
  onAddCard() {
    let card = {
      title: 'Card One',
      edit: false,
      controlList: [
        {
          name: '',
          feature: '',
          category: ''
        }
      ]
    };
    this.cardList = [...this.cardList, card];
  }

  onEditCard(cardIndex: number) {
    this.cardList[cardIndex].edit = true;
  }

  onUpdateCard(cardIndex: number, updatedCardValue: string, removeAllControl: boolean) {
    this.cardList[cardIndex].title = updatedCardValue;
    if (removeAllControl) {
      this.cardList[cardIndex].controlList = [];
    }
    this.cardList[cardIndex].edit = false;
  }

  onDeleteCard(cardIndex: number) {
    this.cardList.splice(cardIndex, 1);
  }

  onAddRow(cardIndex: number) {
    let control = {
      name: '',
      feature: '',
      category: ''
    };
    this.cardList[cardIndex].controlList = [...this.cardList[cardIndex].controlList, control]
  }

  onDeleteControl(cardIndex: number, controlIndex: number) {
    this.cardList[cardIndex].controlList.splice(controlIndex, 1);
  }
  getAllCardDetails(){
    this.allDetailsFlag = true;
  }
  closeDetails(){
    this.allDetailsFlag = false;
  }
}
