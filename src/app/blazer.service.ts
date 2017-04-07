import { Injectable } from '@angular/core';
import { Blazer } from './blazer.model';
import { BLAZERS } from './mock-blazers';

@Injectable()
export class BlazerService {

  constructor(private router: Router, private blazerService: BlazerService) { }

  getBlazers() {
    return BLAZERS;
  }

}
