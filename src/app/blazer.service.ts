import { Injectable } from '@angular/core';
import { Blazer } from './blazer.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class BlazerService {
  blazers: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.blazers = angularFire.database.list('blazers');
 }

  getBlazers() {
    return this.blazers;
  }

  addBlazer(newBlazer: Blazer) {
    this.blazers.push(newBlazer);
  }

  getBlazerById(blazerId: string){
    return this.angularFire.database.object('blazers/', + blazerId);
  }
}
