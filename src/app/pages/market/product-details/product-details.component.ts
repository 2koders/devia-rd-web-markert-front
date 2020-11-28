import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Products } from 'src/app/interfaces/products';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products: Products;
  id: string;

  constructor(private route: ActivatedRoute) {
  //   this.products = {
  //     id: 1,
  //     description: "Lámina Frontal",
  //     images: "https://latestauto20.com/wp-content/uploads/2020/07/photo-1494548162494-384bba4ab999.jpg",
  //     price: 500,
  //     shopedPrice: 100,
  //     discount: 0,
  //     cant: 100
  //   }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }

}
