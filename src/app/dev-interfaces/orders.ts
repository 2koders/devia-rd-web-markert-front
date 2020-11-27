import { Products } from './products';
import { OrdersStates } from './orders-states';
import { PaymentMethods } from './payment-methods';

export interface Orders {
    id: number,
    clientId: number,
    products: Products[],
    totalAmount: number,
    paymentMethod: PaymentMethods,
    orderState: OrdersStates,    
}
