import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ProductFilterService} from '../../services/product-filter.service';

@Component({
  selector: 'header-component',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput')
  private searchInput!: ElementRef;

  constructor(private router: Router, private http: HttpClient , private productService:ProductFilterService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  searchFunction() {
    event?.preventDefault();
    if (this.searchInput.nativeElement.value) {
      let stringFirstLetterUpper = this.searchInput.nativeElement.value.charAt(0).toUpperCase() + this.searchInput.nativeElement.value.slice(1);
      if (stringFirstLetterUpper) {
        this.productService.passInfoEvent(stringFirstLetterUpper);
      }
    } else {
      this.router.navigate(['/catalogue']);
    }
  }

  resetInput() {
    this.productService.deleteInfoEvent();
    this.searchInput.nativeElement.value = '';
  }
}
