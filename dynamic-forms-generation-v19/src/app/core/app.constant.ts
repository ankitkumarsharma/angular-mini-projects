import { DynamicFormsConfigModel } from "../shared/dynamic-form/core/dynamic-form.models";
import { CardListModel, ControlListModel, MenuListModel } from "./app.models";

export const LABELS = {
  home: 'Home',
  title: 'Different Type of Dynamic Forms, please check...',
  fullName: 'Ankit K Sharma',
  route: {
    home: '/'
  },
  noDataFound: 'No Data Found',
  errorMessage: {
    panelNotSelected: 'Panel is not Selected, please select Panel from left side!!',
    panelNotCreated: 'Panel is not listed, please create Panel from right side!!'
  },
  pattern: {
    onlyChar: '^[a-zA-Z]*$',
  }
}

export const MENU_LIST: MenuListModel[] = [
  {
    label: 'JSON Format',
    route: '/json-format'
  },
  {
    label: 'List Add Control Format',
    route: '/list-add-control-format'
  },
  {
    label: 'List Add Control Format(With formArray)',
    route: '/list-add-control-with-array-format'
  },
  {
    label: 'Static Add Control Format',
    route: '/static-add-control-format'
  },
  {
    label: 'Dynamic Forms With FormArray Format',
    route: '/dynamic-forms'
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
  // {
  //   name: 'card1',
  //   desc: 'desc 1',
  //   controlsList: [
  //     // {
  //     //   type: 'date',
  //     //   label: 'Today Date',
  //     //   name: 'date',
  //     //   value: '',
  //     //   validations: [
  //     //     {
  //     //       name: 'required',
  //     //       validator: 'required',
  //     //       message: 'Date is required'
  //     //     }
  //     //   ]
  //     // },
  //     // {
  //     //   type: 'text',
  //     //   label: 'Name',
  //     //   name: 'name',
  //     //   value: '',
  //     //   validations: [
  //     //     {
  //     //       name: 'required',
  //     //       validator: 'required',
  //     //       message: 'Name is required'
  //     //     }
  //     //   ]
  //     // }
  //   ]
  // }
];

export const CONTROL_LIST: ControlListModel[] = [
  {
    label: 'Select',
    value: ''
  },
  {
    label: 'Text',
    value: 'text'
  },
  {
    label: 'Password',
    value: 'password'
  },
  {
    label: 'Email',
    value: 'email'
  },
  // {
  //   label: 'Dropdown',
  //   value: 'select'
  // },
  // {
  //   label: 'Radio',
  //   value: 'radio'
  // },
  // {
  //   label: 'Checkbox',
  //   value: 'checkbox'
  // },
  // {
  //   label: 'Textarea',
  //   value: 'textarea'
  // },
  {
    label: 'Date',
    value: 'date'
  },
  {
    label: 'Time',
    value: 'time'
  }
]

export const CARD_PANEL_LIST: ControlListModel[] = [
  {
    label: 'Select',
    value: ''
  },
  {
    label: 'Card Name 1',
    value: '0'
  }
]