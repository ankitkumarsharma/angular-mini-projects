import { CardListModel, ControlListModel } from "./static-add-control-format.models";

export const CONTROL: ControlListModel = {
  name: '',
  feature: '',
  category: ''
}

export const CARD_OBJ: CardListModel = {
  title: 'Card One',
  edit: false,
  controlList: [CONTROL]
}

export const CARD_LIST: CardListModel[] = [CARD_OBJ];
