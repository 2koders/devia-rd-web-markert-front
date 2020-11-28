import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/landing/home/home.component';
import { IndexComponent } from './pages/market/index/index.component';
import { CheckoutComponent } from './pages/market/checkout/checkout.component';
import { StripeCheckoutComponent } from './components/stripe-checkout/stripe-checkout.component';
import { ProductDetailsComponent } from './pages/market/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './pages/admin/orders/orders.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ContactsComponent } from './pages/landing/contacts/contacts.component';
import { MainMarketComponent } from './pages/market/main-market/main-market.component';
import { MainAdminComponent } from './pages/admin/main-admin/main-admin.component';

//Services
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    CheckoutComponent,
    StripeCheckoutComponent,
    ProductDetailsComponent,
    OrdersComponent,
    DashboardComponent,
    ContactsComponent,
    MainMarketComponent,
    MainAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
