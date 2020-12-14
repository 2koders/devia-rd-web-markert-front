import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orders } from '../interfaces/orders';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OrdersService {
  
  constructor(private httpClient: HttpClient) { }

  getAllOrders():Observable<Orders[]>{
    return this.httpClient.get<Orders[]>(`${environment.apiUrl}/orders/`);
  }

  getThisOrder(order: Orders){
    return this.httpClient.get(`${environment.apiUrl}/orders/${order.id}`);
  }

  createNewOrder(order: Orders): Observable<Orders>{
    return this.httpClient.post<Orders>(`${environment.apiUrl}/orders/`, order);
  }

  updateState(order: Orders): Observable<Orders>{
    return this.httpClient.put<Orders>(`${environment.apiUrl}/orders/${order.id}`, order);
  }
}