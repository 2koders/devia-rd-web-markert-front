import { OrdersStates } from './orders-states';
import { PaymentMethods } from './payment-methods';
import { Users } from './users';

export interface Orders {
    id: string,
    customer: Users,
    date: Date,
    totalAmount: number,
    paymentMethod: PaymentMethods,
    orderState: OrdersStates,
}