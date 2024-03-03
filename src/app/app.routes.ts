import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';

export const routes: Routes = [{
    path: 'home',
    component: HomeComponent
    }, {
    path: 'shop', 
    component: ShopComponent
    },
    {
    path: '**',
    redirectTo: 'home'
    }];
