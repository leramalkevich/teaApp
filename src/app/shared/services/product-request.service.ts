import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, Observable, of, retry} from 'rxjs';
import {ProductType} from '../../types/product.type';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {

  constructor(private http:HttpClient) { }
  getProducts():Observable<ProductType[]> {
    let params = new HttpParams();
    return this.http.get<ProductType[]>('https://testologia.ru/tea', {
      params:params
    })
      .pipe(
        catchError(()=>{
          return of([]);
        }),
        retry(2)
      );
  }

  searchProducts(value:string):Observable<ProductType[]>{
    return this.http.get<ProductType[]>('https://testologia.ru/tea?search=' + value)
  }

  makeAnOrder(data: {}) {
    return this.http.post<{success:number, message?:string}>('https://testologia.ru/order-tea', data);
  }

  getProduct(id:number):Observable<ProductType>{
    return this.http.get<ProductType>(`https://testologia.ru/tea?id=${id}`);
  }
}
