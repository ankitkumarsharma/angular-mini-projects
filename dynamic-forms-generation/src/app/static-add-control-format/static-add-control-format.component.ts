import { Component } from '@angular/core';
import { LABELS } from '../core/app.constant';
import { CardListModel } from './core/static-add-control-format.models';
import { CARD_LIST } from './core/static-add-control-format.constant';

@Component({
  selector: 'app-static-add-control-format',
  standalone: true,
  imports: [],
  templateUrl: './static-add-control-format.component.html',
  styleUrl: './static-add-control-format.component.scss'
})
export class StaticAddControlFormatComponent {
  noDataFound: string = LABELS.noDataFound;
  cardList: CardListModel[] = CARD_LIST;

  onAddRow(cardIndex: number) {
    let control = {
      name: '',
      feature: '',
      category: ''
    }
    this.cardList[cardIndex].controlList = [...this.cardList[cardIndex].controlList, control]
  }
}
