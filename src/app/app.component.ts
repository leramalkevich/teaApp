import { Component } from '@angular/core';
import {ProductFilterService} from './services/product-filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  providers: [ProductFilterService]
})
export class AppComponent {
  title = 'teaApp';

  constructor(private productService:ProductFilterService) {
  }
}
