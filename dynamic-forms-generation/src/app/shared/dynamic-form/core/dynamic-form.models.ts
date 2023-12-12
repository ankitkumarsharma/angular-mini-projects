export interface DynamicFormsConfigModel {
    type: 'text' | 'select' | 'checkbox' | 'password' | 'textarea' | 'radio' | 'date' | 'time' | 'email',
    label: string,
    name: string,
    value: '' | string,
}
