import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'demo-get', loadComponent: () => import('./demo-get/demo-get').then(m => m.DemoGet)},
    {path: 'demo-post', loadComponent: () => import('./demo-post/demo-post').then(m => m.DemoPost)},
];
