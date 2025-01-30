import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {
  subject = new Subject();

  passInfoEvent(data:string) {
    this.subject.next(data);
  }

  deleteInfoEvent(){
    this.subject.next(null);
  }

  constructor() {
  }
}
