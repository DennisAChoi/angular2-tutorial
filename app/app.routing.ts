import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorysComponent } from './category/categorys.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryDetailComponent } from './category/category-detail.component';


const appRoutes: Routes = [
    {
        path : 'categorys',
        component : CategorysComponent
    },
    {
        path : 'dashboard',
        component : DashboardComponent
    },
    {
        path : '',
        redirectTo : '/dashboard',
        pathMatch : 'full'
    },
    {
        path : 'detail/:id',
        component : CategoryDetailComponent
    }
   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);