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

  ngOnInit(): void {
    
  }

  getCheckOutProducts(){
    this.products = this.models.products;
  }

  calcTotalAmount(){
    let value = 0;

    this.products.forEach(product => {
      product.subTotal = product.quantityToSold * (product.price - (product.price * product.discount));
      console.log(product.subTotal);
    });

    this.products.forEach(product => {
      value += product.subTotal;
      console.log(this.totalAmount);
    });
    
    this.totalAmount = value;
  }

  updateStockQuantity(prd: Products){
    prd.quantityStock -= prd.quantityToSold;
    prd.quantitySold += prd.quantityToSold;
  }

  createNewOrder(){
    
  }

  pay(){
    this.products.forEach(productToPay => {
      this.updateStockQuantity(productToPay);

      console.log(productToPay.description + ": " + productToPay.quantityStock + " - " + productToPay.quantitySold);
    });

    this.createNewOrder();
    console.log('Payment Completed!');
  }
}