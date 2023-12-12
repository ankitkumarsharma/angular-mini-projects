import { DynamicFormsConfigModel } from "./dynamic-form.models";

export const LABELS = {
    noFormData: 'No controls Available, please add json form data for see dynamic forms!!!'
}
export const DYNAMIC_FORM_CONFIG_DATA: DynamicFormsConfigModel[] = [
    {
        type: 'date',
        label: 'Today Date',
        name: 'date',
        value: '',
        validations: [
            {
                name: 'required',
                validator: 'required',
                message: 'Date is required'
            }
        ]
    },
    {
        type: 'text',
        label: 'Name',
        name: 'name',
        value: '',
        validations: [
            {
                name: 'required',
                validator: 'required',
                message: 'Name is required'
            }
        ]
    }
]