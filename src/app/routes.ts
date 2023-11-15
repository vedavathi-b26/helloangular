import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { Component } from '@angular/core';

const routeConfig: Routes =[
    {
        path:'',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home Details',
    }
];
export default routeConfig;