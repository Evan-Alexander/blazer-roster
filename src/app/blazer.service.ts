import { Injectable } from '@angular/core';
import { Blazer } from './blazer.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class BlazerService {
  blazers: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.blazers = db.list('blazers');
  }

  getBlazers() {
    return this.blazers;
  }

  addBlazer(newBlazer: Blazer) {
    this.blazers.push(newBlazer);
  }

  getBlazerById(blazerId: string) {
    return this.db.object('blazers/' + blazerId);
  }

  updateBlazer(localUpdatedBlazer) {
    var blazerEntryInFirebase = this.getBlazerById(localUpdatedBlazer.$key);
    blazerEntryInFirebase.update({name: localUpdatedBlazer.name,
                                position: localUpdatedBlazer.position,
                                height: localUpdatedBlazer.height,
                                description: localUpdatedBlazer.description,
                                photo: localUpdatedBlazer.photo});
  }

  deleteBlazer(localBlazerToDelete) {
    var blazerEntryInFirebase = this.getBlazerById(localBlazerToDelete.$key);
    blazerEntryInFirebase.remove();
  }
}
