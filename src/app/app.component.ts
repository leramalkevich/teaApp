import { Component } from '@angular/core';
import {ProductFilterService} from './shared/services/product-filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  providers: [ProductFilterService]
})
export class AppComponent {
  title = 'teaApp';

  constructor() {
  };
}
