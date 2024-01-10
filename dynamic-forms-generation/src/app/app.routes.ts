import { Routes } from '@angular/router';
import { DynamicFormsWithArrayFormatComponent } from './dynamic-forms-with-array-format/dynamic-forms-with-array-format.component';
import { JsonFormatComponent } from './json-format/json-format.component';
import { ListAddControlFormatComponent } from './list-add-control-format/list-add-control-format.component';
import { ListAddControlWithArrayFormatComponent } from './list-add-control-with-array-format/list-add-control-with-array-format.component';
import { StaticAddControlFormatComponent } from './static-add-control-format/static-add-control-format.component';

export const routes: Routes = [
    {path:'json-format', component: JsonFormatComponent},
    {path:'list-add-control-format', component: ListAddControlFormatComponent},
    {path:'list-add-control-with-array-format', component: ListAddControlWithArrayFormatComponent},
    {path:'static-add-control-format', component: StaticAddControlFormatComponent},
    {path:'dynamic-forms', component: DynamicFormsWithArrayFormatComponent},
];
