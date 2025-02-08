import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {AccordionComponent} from './components/accordion/accordion.component';
import {CardComponent} from './components/card/card.component';
import {PopupComponent} from './components/popup/popup.component';
import {RouterModule} from '@angular/router';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AccordionComponent,
    CardComponent,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbAccordionModule,
    SharedRoutingModule
  ],
  exports: [
    AccordionComponent,
    CardComponent,
    PopupComponent
  ]
})
export class SharedModule { }
