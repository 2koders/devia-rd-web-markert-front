import { Orders } from './orders';
import { Products } from './products';

export interface OrderProducts {
    idOrder: Orders,
    idProduct: Products,
    productDescription: string,
    productQuantity: number,
    productDiscount: number,
    productPrice: number,
    subTotal: number,
}
