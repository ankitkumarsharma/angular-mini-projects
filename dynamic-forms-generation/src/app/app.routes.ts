import { Routes } from '@angular/router';
import { JsonFormatComponent } from './json-format/json-format.component';
import { ListAddControlFormatComponent } from './list-add-control-format/list-add-control-format.component';
import { StaticAddControlFormatComponent } from './static-add-control-format/static-add-control-format.component';

export const routes: Routes = [
    {path:'json-format', component: JsonFormatComponent},
    {path:'list-add-control-format', component: ListAddControlFormatComponent},
    {path:'static-add-control-format', component: StaticAddControlFormatComponent},
];
