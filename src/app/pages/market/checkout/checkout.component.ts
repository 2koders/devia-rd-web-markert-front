import { Component } from '@angular/core';
import { Products } from 'src/app/dev-interfaces/products';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent {

  products: Products[];
  totalAmount: number

  constructor() {
    this.totalAmount = 0;

    this.products = [
      {
        id: 1,
        description: "Lámina Frontal",
        images: "https://latestauto20.com/wp-content/uploads/2020/07/photo-1494548162494-384bba4ab999.jpg",
        price: 500,
        shopedPrice: 100,
        discount: 0,
        cant: 100
      },
      {
        id: 2,
        description: "Lámina Trasera",
        images: "https://latestauto20.com/wp-content/uploads/2020/07/photo-1494548162494-384bba4ab999.jpg",
        price: 700,
        shopedPrice: 200,
        discount: 0.2,
        cant: 956
      },
      {
        id: 3,
        description: "Máquina Moderna",
        images: "https://latestauto20.com/wp-content/uploads/2020/07/photo-1494548162494-384bba4ab999.jpg",
        price: 35000,
        shopedPrice: 21500,
        discount: 0.1,
        cant: 12
      },
    ]

    this.calcAmount();
  }

  calcAmount(){
    this.products.forEach(product => {
      this.totalAmount += product.cant * (product.price - (product.price * product.discount));
      console.log(product.id + " - " + product.price + " " + product.discount + " " + "discount: " + (product.price * product.discount) + "subtotal: " + this.totalAmount)
    });
  }
}
