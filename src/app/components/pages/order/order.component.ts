import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CustomValidators} from '../../../shared/custom-validators';

declare var $: any;

@Component({
  selector: 'order',
  standalone: false,

  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  formValues = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[А-Яа-я ]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[А-Яа-я ]+$')]],
    phone: ['', [Validators.required, CustomValidators.withPlusPhoneNumberValidator, CustomValidators.noPlusPhoneNumberValidator]],
    // phone: ['', [Validators.required, Validators.pattern('^[\+]?[0-9]{11,12}\s*$')]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$'), Validators.maxLength(6)]],
    product: [''],
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

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }

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
    this.subscriptionOrder = this.http.post<{ success: number, message?: string }>('https://testologia.ru/order-tea', data)
      .subscribe(response => {
        if (response.success === 1) {
          // alert('ОК');
          const formElement = $("#orderForm");
          const title = $("#orderTitle");
          if (formElement && title) {
            const hiddenSuccessText = $("#hidden");
            title.detach();
            formElement.detach();
            if(hiddenSuccessText) {
              hiddenSuccessText.removeClass('d-none');
            }
          }
        } else if (response.success === 0) {
          console.log('Error');
          const errorMessage = document.getElementById('validationServer');
          if (errorMessage) {
            errorMessage.style.display = 'block';
            setTimeout(() => {
              errorMessage.style.display = 'none';
            }, 3000)
          }
        }
      })
  }

  public numbersOnly(event: KeyboardEvent): void {
    let allowedToEnter = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (allowedToEnter.includes(event.key) || event.key?.match(/\d+$/g)) {
      return;
    } else {
      event.preventDefault();
    }

    // event.key.charCodeAt(0);
    // if (!/[0-9]/.test(event.key) && !/['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete']/.test(event.key)) {
    //   event.preventDefault();
    // }

    // if (event.key && !event.key.match(/\d+$/)) {
    //   event.preventDefault();
    // }
  }

}
