import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductType} from '../../../types/product.type';
import {Router} from '@angular/router';
import {tap} from 'rxjs';
import {ProductFilterService} from '../../../shared/services/product-filter.service';
import {ProductRequestService} from '../../../shared/services/product-request.service';

@Component({
  selector: 'product-cards',
  standalone: false,

  templateUrl: './product-cards.component.html',
  styleUrl: './product-cards.component.scss'
})
export class ProductCardsComponent implements OnInit, AfterViewInit {
  @ViewChild('title')
  private title!: ElementRef;

  constructor(private http: HttpClient, private router: Router, private productService: ProductFilterService,
              private productRequest: ProductRequestService) {
  }

  public products: ProductType[] = [];
  loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    this.productRequest.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
          // this.title.nativeElement.innerText = 'Наши чайные коллекции';
        })
      )
      .subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/'])
        }
      })
  }

  ngAfterViewInit() {
    this.productService.subject.subscribe((value) => {
      if (value && value !== '') {
        this.productRequest.searchProducts(value.toString())
          .pipe(
            tap(() => {
              this.loading = false;
            })
          )
          .subscribe(response => {
            let existingProduct = response.map(item => item.title);
            if (existingProduct && existingProduct[0] !== undefined) {
              this.title.nativeElement.innerText = 'Результаты поиска по запросу "' + value + '"';
              this.products = response;
            } else {
              this.products = [];
              this.title.nativeElement.innerText = 'По вашему запросу ничего не найдено!';
            }
          })
      } else {
        this.productRequest.getProducts()
          .pipe(
            tap(()=>{
              this.loading = false;
              this.title.nativeElement.innerText = 'Наши чайные коллекции';
            })
          )
          .subscribe({
            next: (data)=>{
              this.products = data;
            },
            error:(error)=>{
              console.log(error);
              this.router.navigate(['/']);
            }
          })
      }
    })
  }
}
