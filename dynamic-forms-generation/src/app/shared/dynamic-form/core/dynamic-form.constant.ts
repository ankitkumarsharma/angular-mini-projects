import { DynamicFormsConfigModel } from "./dynamic-form.models";

export const DYNAMIC_FORM_CONFIG_DATA: DynamicFormsConfigModel[] = [
    {
        type: 'date',
        label: 'Today Date',
        name: 'date',
        value: '',
    },
    {
        type: 'text',
        label: 'Name',
        name: 'name',
        value: '',
    }
]