import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/landing/home/home.component';
import { IndexComponent } from './pages/market/index/index.component';
import { CheckoutComponent } from './pages/market/checkout/checkout.component';
import { StripeCheckoutComponent } from './components/stripe-checkout/stripe-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    CheckoutComponent,
    StripeCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
