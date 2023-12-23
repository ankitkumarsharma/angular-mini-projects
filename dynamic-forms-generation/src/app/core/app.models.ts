import { DynamicFormsConfigModel } from "../shared/dynamic-form/core/dynamic-form.models"

export interface LabelsModel {
    home: string,
    fullName: string,
    route: RouteModel
}

export interface RouteModel {
    home: string
}

export interface MenuListModel {
    label: string,
    route: string
}

export interface CardListModel {
    name: string,
    desc: string,
    controlsList: DynamicFormsConfigModel[] | []
}

export interface ControlListModel {
    label: string,
    value: string
}