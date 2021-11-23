import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  data: any = new BehaviorSubject({} as Object);
  constructor() {}
  sharingData(_data: any) {
    this.data.next(_data);
  }
}
