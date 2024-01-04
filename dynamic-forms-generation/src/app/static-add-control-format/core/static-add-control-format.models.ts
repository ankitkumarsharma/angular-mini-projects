export interface CardListModel {
  title: string,
  edit: boolean,
  controlList: ControlListModel[]
}

export interface ControlListModel {
  name: string,
  feature: string,
  category: string
}