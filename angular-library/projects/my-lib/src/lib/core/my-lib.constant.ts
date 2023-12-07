import { TableConfigModel } from "./my-lib.models";

export const DUMMY_DATA_TABLE_CONFIG:TableConfigModel = {
    title: 'Reusable Table',
    tableHeaders: [
        {
            label:'Name',
            value:'name'
        },
        {
            label:'City',
            value:'city'
        },
        {
            label:'Country',
            value:'country'
        }
    ],
    tableData: [
        {
            name: 'Ankit',
            city: 'Delhi',
            country: 'India'
        },
        {
            name: 'Manish',
            city: 'Gurgaon',
            country: 'India'
        },
        {
            name: 'Rahul',
            city: 'Bangalore',
            country: 'India'
        }
    ]
}

export const LABELS = {
    noHeaders:'No Headers',
    noData:'No Data'
}