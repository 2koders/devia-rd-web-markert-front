import { Products } from '../dev-interfaces/products';

export class Models {
  products: Products[];

  constructor(){
    this.products = [
      {
        id: 1,
        description: "Lámina Frontal",
        images: "https://latestauto20.com/wp-content/uploads/2020/07/photo-1494548162494-384bba4ab999.jpg",
        price: 500,
        shopedPrice: 100,
        discount: 0,
        quantityStock: 1000,
        quantitySold: 0,
        quantityToSold: 0
      },
      {
        id: 2,
        description: "Lámina Trasera",
        images: "https://latestauto20.com/wp-content/uploads/2020/07/photo-1494548162494-384bba4ab999.jpg",
        price: 700,
        shopedPrice: 200,
        discount: 0.2,
        quantityStock: 1000,
        quantitySold: 0,
        quantityToSold: 0
      },
      {
        id: 3,
        description: "Máquina Moderna",
        images: "https://latestauto20.com/wp-content/uploads/2020/07/photo-1494548162494-384bba4ab999.jpg",
        price: 35000,
        shopedPrice: 21500,
        discount: 0.1,
        quantityStock: 20,
        quantitySold: 0,
        quantityToSold: 0
      },
    ]
  }
}
