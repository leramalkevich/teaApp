import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, Observable, of, retry, tap} from 'rxjs';
import {ProductType} from '../types/product.type';

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
        tap((result)=>{
          console.log(result);
        }),
        catchError(error=>{
          return of([]);
        }),
        retry(2)
      );
  }

  searchProducts(value:string):Observable<ProductType[]>{
    return this.http.get<ProductType[]>('https://testologia.ru/tea?search=' + value)
  }
}
