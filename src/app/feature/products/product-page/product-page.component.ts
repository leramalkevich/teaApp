import {Component, OnInit} from '@angular/core';
import {ProductType} from '../../../types/product.type';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductRequestService} from '../../../shared/services/product-request.service';

@Component({
  selector: 'product-page',
  standalone: false,

  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit{
  product: ProductType;
  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute, private router:Router,
              private productRequest:ProductRequestService) {
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
        this.productRequest.getProduct(+params['id'])
          .subscribe({
            next:(data)=>{
              this.product = data;
            },
            error:()=>{
              this.router.navigate(['/']);
            }
          })
      }
    })
  }
}
