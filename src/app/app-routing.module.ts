import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/landing/home/home.component';
import { CheckoutComponent } from './pages/market/checkout/checkout.component';
import { IndexComponent } from './pages/market/index/index.component';

const routes: Routes = [
  { 
    path: 'market', 
    component: IndexComponent, 
    children:[
      {
        path: 'checkout', 
        component: CheckoutComponent,
      }
    ]
  },
  { 
    path: '', 
    component: HomeComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
