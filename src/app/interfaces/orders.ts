import { OrdersStates } from './orders-states';
import { PaymentMethods } from './payment-methods';
import { Users } from './users';
import { OrderProducts } from './order-products';

export interface Orders {
    id: number,
    customer: Users,
    date: Date, 
    products: OrderProducts[],
    totalAmount: number,
    paymentMethod: PaymentMethods,
    orderState: OrdersStates,
}