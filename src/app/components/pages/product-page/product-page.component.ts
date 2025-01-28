import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from '../../../types/product.type';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'product-page',
  standalone: false,

  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit{
  product: ProductType;
  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute, private router:Router) {
    this.product = {
      id: 0,
      image: '',
      price: 0,
      title: '',
      description: ''
    }
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{
      if (params['id']) {
        console.log(params);
        const id = params['id'];
        console.log(id);
        this.http.get<ProductType>('https://testologia.ru/tea?id='+id)
          .subscribe({
            next:(data)=>{
              this.product = data;
              console.log(this.product);
            },
            error:()=>{
              this.router.navigate(['/']);
            }
          })
      }
    })
  }
}
