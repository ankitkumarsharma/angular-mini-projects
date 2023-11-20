import { Routes } from '@angular/router';
import { BlockIfComponent } from './block-if/block-if.component';
import { BlockSwitchComponent } from './block-switch/block-switch.component';
import { BlockForComponent } from './block-for/block-for.component';
import { BlockDeferComponent } from './block-defer/block-defer.component';

export const routes: Routes = [
    {path:'block-if', component: BlockIfComponent},
    {path:'block-switch', component: BlockSwitchComponent},
    {path:'block-for', component: BlockForComponent},
    {path:'block-defer', component: BlockDeferComponent},
];
