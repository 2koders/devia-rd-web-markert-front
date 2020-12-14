import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/products';

@Injectable({providedIn: 'root'})
export class ProductsService {
  
  constructor(private httpClient: HttpClient) { }

  getAllProducts():Observable<Products[]>{
    return this.httpClient.get<Products[]>(`${environment.apiUrl}/products/`);
  }

  getThisProduct(product: Products){
    return this.httpClient.get(`${environment.apiUrl}/products/${product.id}`);
  }

  createNewProduct(product: Products): Observable<Products>{
    return this.httpClient.post<Products>(`${environment.apiUrl}/products/`, product);
  }

  updateThisProduct(product: Products): Observable<Products>{
    return this.httpClient.put<Products>(`${environment.apiUrl}/products/${product.id}`, product);
  }

  deleteThisProduct(product: Products): Observable<Products>{
    return this.httpClient.delete<Products>(`${environment.apiUrl}/products/${product.id}`);
  }
}