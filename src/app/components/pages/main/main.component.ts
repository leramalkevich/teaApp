import {Component, OnInit} from '@angular/core';
declare var $:any;

@Component({
  selector: 'main',
  standalone: false,

  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
    setTimeout(()=>{
      $('#exampleModal').modal('show');
    },10000);
  }
}
