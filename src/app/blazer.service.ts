import { Injectable } from '@angular/core';
import { Blazer } from './blazer.model';
import { BLAZERS } from './mock-blazers';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class BlazerService {
  blazers: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.blazers = angularFire.database.list('blazers');
 }

  getBlazers() {
    return this.albums;
  }

  addBlazer(newBlazer: Blazer) {
    this.blazers.push(newBlazer);
  }

  getBlazerById(blazerId: string){
    for (var i = 0; i <= BLAZERS.length - 1; i++) {
      if (BLAZERS[i].id === blazerId) {
        return BLAZERS[i];
      }
    }
  }
}
