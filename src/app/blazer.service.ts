import { Injectable } from '@angular/core';
import { Blazer } from './blazer.model';
import { BLAZERS } from './mock-blazers';

@Injectable()
export class BlazerService {

  constructor() { }

  getBlazers() {
    return BLAZERS;
  }

  getBlazerById(blazerId: number){
    for (var i = 0; i <= BLAZERS.length - 1; i++) {
      if (BLAZERS[i].id === blazerId) {
        return BLAZERS[i];
      }
    }
  }
}
