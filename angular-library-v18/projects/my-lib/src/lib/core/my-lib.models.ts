export interface TableConfigModel {
    title: string;
    tableHeaders: HeaderDataTableConfigModel[];
    tableData: Array<any>;
}

export interface HeaderDataTableConfigModel {
    label: string;
    value: string;
}

