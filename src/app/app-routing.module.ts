import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { MainAdminComponent } from './pages/admin/main-admin/main-admin.component';
import { OrdersComponent } from './pages/admin/orders/orders.component';
import { ContactsComponent } from './pages/landing/contacts/contacts.component';
import { HomeComponent } from './pages/landing/home/home.component';
import { CheckoutComponent } from './pages/market/checkout/checkout.component';
import { IndexComponent } from './pages/market/index/index.component';
import { MainMarketComponent } from './pages/market/main-market/main-market.component';
import { ProductDetailsComponent } from './pages/market/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'admin',
    component: MainAdminComponent,
    children:[
      {
        path: '', 
        component: DashboardComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
    ]
  },
  { 
    path: 'market', 
    component: MainMarketComponent, 
    children:[
      {
        path: '', 
        component: IndexComponent,
      },
      {
        path: 'checkout', 
        component: CheckoutComponent,
      },
      {
        path: 'details',
        component: ProductDetailsComponent,
      }
    ]
  },
  { 
    path: '', 
    component: HomeComponent,
    children: [
      {
        path: 'contacts',
        component: ContactsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
