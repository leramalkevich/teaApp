import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PopupComponent} from '../../../shared/popup/popup.component';
declare var $:any;

@Component({
  selector: 'main',
  standalone: false,

  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild(PopupComponent)
  private popupComponent!:PopupComponent;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(()=>{
    this.popupComponent.open();
    },10000);
  }
}
