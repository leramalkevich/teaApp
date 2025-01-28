import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductType} from '../../../types/product.type';
import { Router} from '@angular/router';

@Component({
  selector: 'product-cards',
  standalone: false,

  templateUrl: './product-cards.component.html',
  styleUrl: './product-cards.component.scss'
})
export class ProductCardsComponent implements OnInit {
  constructor(private http: HttpClient, private router:Router) {
  }
  public products:ProductType[]=[];
ngOnInit() {
  this.http.get<ProductType[]>('https://testologia.ru/tea')
    .subscribe({
      next: (data)=>{
        this.products = data;
        console.log(this.products);
      },
      error:(error)=>{
        console.log(error);
        this.router.navigate(['/']);
      }
    })
}
}
