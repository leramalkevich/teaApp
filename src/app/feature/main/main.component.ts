import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {PopupComponent} from '../../shared/components/popup/popup.component';

@Component({
  selector: 'main',
  standalone: false,

  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild(PopupComponent)
  private popupComponent!:PopupComponent;
  images = [1,2,3].map((n) => `assets/images/image${n}.png`);
  constructor(private config:NgbCarouselConfig) {
    config.pauseOnHover = true;
    config.keyboard = true;
    config.wrap = true;
  }

  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(()=>{
    this.popupComponent.open();
    },10000);
  }
}
