import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Blazer } from '../blazer.model';
import { BlazerService } from '../blazer.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-blazer-detail',
  templateUrl: './blazer-detail.component.html',
  styleUrls: ['./blazer-detail.component.css'],
  providers: [BlazerService]
})
export class BlazerDetailComponent implements OnInit {
  blazerId: string;
  blazerToDisplay;

  constructor(
    private route: ActivatedRoute,
    private localtion: Location,
    private blazerService: BlazerService
    ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
     this.blazerId = urlParametersArray['id'];
   });
   this.blazerService.getBlazerById(this.blazerId).subscribe(dataLastEmittedFromObserver => {
     this.blazerToDisplay = dataLastEmittedFromObserver;

     console.log(this.blazerToDisplay);
   })
  }
}
