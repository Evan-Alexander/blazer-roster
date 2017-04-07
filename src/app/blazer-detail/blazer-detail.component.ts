import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Blazer } from '../blazer.model';

@Component({
  selector: 'app-blazer-detail',
  templateUrl: './blazer-detail.component.html',
  styleUrls: ['./blazer-detail.component.css']
})
export class BlazerDetailComponent implements OnInit {
  blazerId: number = null;

  constructor(private route: ActivatedRoute, private localtion: Location) { }

  ngOnInit() {
    this.route.params.forEach((ulrParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    });
  }

}
