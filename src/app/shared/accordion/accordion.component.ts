import { Component } from '@angular/core';
import {NgbAccordionConfig, NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'accordion',
  standalone: false,

  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  constructor(config:NgbAccordionConfig) {
    config.closeOthers = true;
  }

}
