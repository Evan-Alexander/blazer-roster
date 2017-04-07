import { Component, OnInit } from '@angular/core';
import { Blazer } from '../blazer.model';
import { Router } from '@angular/router';
import { BlazerService } from '../blazer.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BlazerService]
})

export class HomeComponent implements OnInit {
  blazers: FirebaseListObservable<any[]>;;

  constructor(private router: Router, private blazerService: BlazerService) { }

  ngOnInit() {
    this.blazers = this.blazerService.getBlazers();
  }

  goToDetailPage(clickedBlazer) {
    this.router.navigate(['blazers', clickedBlazer.$key]);
  }

}
