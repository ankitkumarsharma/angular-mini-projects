export interface DynamicFormsConfigModel {
    type: 'text' | 'select' | 'checkbox' | 'password' | 'textarea' | 'radio' | 'date' | 'time' | 'email',
    label?: string,
    name: string,
    value?: '' | string,
    validations?: ValidationsListModel[]
}

export interface ValidationsListModel {
    name:string,
    validator: 'required' | 'pattern' | 'email',
    message: string
}