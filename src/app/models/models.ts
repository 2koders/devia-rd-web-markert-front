import { OrderProducts } from '../interfaces/order-products';
import { Orders } from '../interfaces/orders';
import { OrdersStates } from '../interfaces/orders-states';
import { PaymentMethods } from '../interfaces/payment-methods';
import { Products } from '../interfaces/products';
import { UserPermits } from '../interfaces/user-permits';
import { Users } from '../interfaces/users';

export class Models {
  //products
  products: Products[];

  //orders
  orders: Orders[];
  readonly orderProducts: OrderProducts[];
  readonly orderState: OrdersStates[];
  readonly paymentMethods: PaymentMethods[];

  //users
  users: Users[];
  readonly userPermits: UserPermits[];

  constructor(){
    this.userPermits = [
      {
        id: 1,
        userPermits: "Admin"
      },
      {
        id: 2,
        userPermits: "Client"
      }
    ];

    this.users = [
      {
        id: 1,
        isBussines: false,
        email: "admin@mail.com",
        password: "ABab123@*",
        name: "Enmanuel",
        lastName: "Balcacer",
        RNCOrIdCard: "40211451154",
        imgProfile: "https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
        totalTimesLogged: 0,
        isLoged: false,
        userPermits: this.userPermits.find(a => a.userPermits == "Admin"),
      },
      {
        id: 2,
        isBussines: false,
        email: "clientefinal@mail.com",
        password: "ABab123@*",
        name: "Juan",
        lastName: "Perez",
        RNCOrIdCard: "4020000000",
        imgProfile: "https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
        totalTimesLogged: 0,
        isLoged: true,
        userPermits: this.userPermits.find(a => a.userPermits == "Cliente"),
      },
      {
        id: 3,
        isBussines: true,
        email: "empresa@mail.com",
        password: "ABab123@*",
        name: "FERRETERIA BOLIVAR C POR A",
        lastName: "",
        RNCOrIdCard: "101070803",
        imgProfile: "",
        totalTimesLogged: 0,
        isLoged: false,
        userPermits: this.userPermits.find(a => a.userPermits == "Cliente"),
      }
    ];

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
        quantityToSold: 0,
        subTotal: 0,
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
        quantityToSold: 0,
        subTotal: 0,
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
        quantityToSold: 0,
        subTotal: 0,
      },
    ];    

    this.orderState = [
      {
        id: 1,
        state: "Completed",
      },
      {
        id: 2,
        state: "Canceled",
      },
      {
        id: 3,
        state: "In process",
      },
      {
        id: 4,
        state: "Package sent",
      },
    ];

    this.paymentMethods = [
      {
        id: 1,
        paymentMethod: 'Tarjeta de Credito/Debito',
      },
      {
        id: 2,
        paymentMethod: 'PayPal'
      }
    ];

    this.orders = [
      {
        id: 1,
        customer: this.users.find(u => u.id == 2),
        date: new Date(),
        totalAmount: 0,
        paymentMethod: this.paymentMethods.find(pm => pm.id == 1),
        orderState: this.orderState.find(os => os.id == 1),
      }
    ];

    this.orderProducts = [
      {
        idOrder: this.orders.find(o => o.id == 1),
        idProduct: this.products.find(o => o.id == 1),
        productDescription: this.products.find(o => o.id == 1).description,
        productQuantity: 1,
        productDiscount: this.products.find(o => o.id == 1).discount,
        productPrice: this.products.find(o => o.id == 1).price,
        subTotal: 100,
      },
      {
        idOrder: this.orders.find(o => o.id == 1),
        idProduct: this.products.find(o => o.id == 2),
        productDescription: this.products.find(o => o.id == 2).description,
        productQuantity: 1,
        productDiscount: this.products.find(o => o.id == 2).discount,
        productPrice: this.products.find(o => o.id == 2).price,
        subTotal: 100,
      },
      {
        idOrder: this.orders.find(o => o.id == 1),
        idProduct: this.products.find(o => o.id == 3),
        productDescription: this.products.find(o => o.id == 3).description,
        productQuantity: 1,
        productDiscount: this.products.find(o => o.id == 3).discount,
        productPrice: this.products.find(o => o.id == 3).price,
        subTotal: 100,
      },
    ];
  }
}
