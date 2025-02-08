import {Component, ElementRef, inject, TemplateRef, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  standalone: false,

  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;
 private modalService = inject(NgbModal);
 open():void{
   this.modalService.open(this.popup, {});
 }

}
