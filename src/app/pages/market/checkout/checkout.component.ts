import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/dev-interfaces/products';
import { Models } from 'src/app/models/models';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {

  models: Models;
  products: Products[];
  totalAmount: number;

  constructor() {
    this.models = new Models();
    this.getCheckOutProducts();
    this.totalAmount = 0;
  }

  ngOnInit() {
    
  }

  getCheckOutProducts(){
    this.products = this.models.products;
  }

  calcTotalAmount(){
    this.products.forEach(product => {
      this.totalAmount += product.quantityToSold * (product.price - (product.price * product.discount));
      //console.log(product.id + " - " + product.price + " " + product.discount + " " + "discount: " + (product.price * product.discount) + "subtotal: " + this.totalAmount)
    });
  }

  restQuantity(prd: Products){
    prd.quantityStock -= prd.quantityToSold;
  }

  pay(){
    this.products.forEach(productToPay => {
      this.restQuantity(productToPay);
    });
    console.log('Payment Completed!');
  }
}