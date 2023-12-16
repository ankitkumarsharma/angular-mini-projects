import { DynamicFormsConfigModel } from "../shared/dynamic-form/core/dynamic-form.models";
import { CardListModel, MenuListModel } from "./app.models";

export const LABELS = {
    home:'Home',
    fullName:'Ankit K Sharma',
    route: {
        home:'/'
    },
    noDataFound:'No Data Found'
}

export const MENU_LIST: MenuListModel[] = [
    {
        label:'JSON Format',
        route:'/json-format'
    },
    {
        label:'List Add Control Format',
        route:'/list-add-control-format'
    },
    {
        label:'Static Add Control Format',
        route:'/static-add-control-format'
    }
];

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

export const CARD_LIST: CardListModel[] = [
    {
      cardName: 'card info 1',
      desc: 'desc 1',
      controlsList: [
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
    },
    {
      cardName: 'card info 2',
      desc: 'desc 2',
      controlsList: [
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
      ]
    }
  ];