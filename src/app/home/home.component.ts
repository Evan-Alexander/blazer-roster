import { Component, OnInit } from '@angular/core';
import { Blazer } from '../blazer.model';
import { Router } from '@angular/router';
import { BlazerService } from '../blazer.service';
import { FirebaseListObservable } from 'angularfire2/database';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BlazerService]
})

export class HomeComponent implements OnInit {
  blazers;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private blazerService: BlazerService) { }

  ngOnInit() {
    this.blazerService.getBlazers().subscribe(dataLastEmittedFromObserver => {
      this.blazers = dataLastEmittedFromObserver;
      console.log(this.blazers);
    })
  }

  goToDetailPage(clickedBlazer) {
    this.router.navigate(['blazer', clickedBlazer.$key]);
    console.log(clickedBlazer);
  }

  positionFilter: string = "allBlazers";

  onChange(optionFromMenu) {
    this.positionFilter = optionFromMenu;
  }

}
