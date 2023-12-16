import { Component } from '@angular/core';
import { CARD_LIST, LABELS } from '../core/app.constant';
import { CardListModel } from '../core/app.models';

@Component({
  selector: 'app-list-add-control-format',
  standalone: true,
  imports: [],
  templateUrl: './list-add-control-format.component.html',
  styleUrl: './list-add-control-format.component.scss'
})
export class ListAddControlFormatComponent {
  cardList: CardListModel[] = CARD_LIST;
  noDataFound:string = LABELS.noDataFound;
  addCard(){
    let obj = {
      cardName: 'Another Card',
      desc: 'Another desc 1',
      controlsList: []
    }
    this.cardList = [...this.cardList, obj];
  }
}
