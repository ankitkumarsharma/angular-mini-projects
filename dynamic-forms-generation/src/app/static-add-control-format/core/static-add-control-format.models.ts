export interface CardListModel {
  title: string,
  controlList: ControlListModel[]
}

export interface ControlListModel {
  name: string,
  feature: string,
  category: string
}