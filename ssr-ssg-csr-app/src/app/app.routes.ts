import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ContactUs } from './contact-us/contact-us';
import { AboutUs } from './about-us/about-us';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'about-us', component: AboutUs},
    {path: 'contact-us', component: ContactUs},
];
