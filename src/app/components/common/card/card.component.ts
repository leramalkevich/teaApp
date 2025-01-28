import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from '../../../types/product.type';

@Component({
  selector: 'card-component',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product: ProductType;
  @Output() addToCardEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.product = {
      id: 0,
      image: '',
      price: 0,
      title: '',
      description: ''
    }
  }
}
