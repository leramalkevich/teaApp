import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'order',
  standalone: false,

  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {
  private fb = inject(FormBuilder);
  formValues = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[А-Яа-я ]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[А-Яа-я ]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^[\+]?[0-9]{11,12}\s*$')]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
    product: [''],
    // product: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.pattern('^[А-Яа-я0-9-\/\. ]+$')]],
    comment: [''],
  }, {updateOn: 'blur'});
  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;
  private productToOder: HTMLInputElement | null = null;


  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.formValues.value.product = params['product'];
        const productInput = $('#product');
        if (productInput) {
          productInput.val(params['product']);
        }
        this.productToOder = params['product'];
      }
    });
  }

  // public makeOrder() {
  //   event?.preventDefault();
  //   console.log('All is working!');
  //   if (!this.formValues.value.name || !this.formValues.value.lastName || !this.formValues.value.phone || !this.formValues.value.country
  //   || !this.formValues.value.zip || !this.formValues.value.address) {
  //     alert('Ошибка! Форма не заполнена');
  //     return;
  //   } else {
  //     const data = {
  //       name: this.formValues.value.name,
  //       last_name: this.formValues.value.lastName,
  //       phone: this.formValues.value.phone,
  //       country: this.formValues.value.country,
  //       zip: this.formValues.value.zip,
  //       product: this.productToOder,
  //       address: this.formValues.value.address,
  //       comment: this.formValues.value.comment
  //     }
  //       this.subscriptionOrder = this.http.post<{ success: number, message?: string }>('https://testologia.ru/order-tea', data)
  //         .subscribe(response=>{
  //           if(response.success === 1){
  //
  //           } else {
  //             alert('Error');
  //           }
  //         })
  //   }
  // }
  public handleSubmit() {
    const data = {
      name: this.formValues.value.name,
      last_name: this.formValues.value.lastName,
      phone: this.formValues.value.phone,
      country: this.formValues.value.country,
      zip: this.formValues.value.zip,
      product: this.productToOder,
      address: this.formValues.value.address,
      comment: this.formValues.value.comment
    }
    console.log(data);
    this.subscriptionOrder = this.http.post<{ success: number, message?: string }>('https://testologia.ru/order-tea', data)
            .subscribe(response=>{
              if(response.success === 1){
                alert('ОК');
              } else if (response.success === 0) {
                console.log('Error');
                document.getElementById('validationServer')!.style.display = 'block';
              }
            })
  }

}
