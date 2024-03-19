import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


export const routes: Routes = [{
    path: 'home',
    component: HomeComponent
    }, {
    path: 'shop', 
    component: ShopComponent
    },{
    path: 'cart',
    component: CartComponent
    },{
    path: 'checkout',
    component: CheckoutComponent
    },
    {
    path: '**',
    redirectTo: 'home'
    }];
