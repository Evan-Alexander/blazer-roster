import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { BlazerService } from '../blazer.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  providers: [BlazerService]
})
export class ManagerComponent implements OnInit {

  constructor(private blazerService: BlazerService) { }

  ngOnInit() {
  }

  submitForm(name: string, position: string, height: string, description: string) {
    var newBlazer: new Blazer(name, position, height, description);
    this.blazerService.addBlazer(newBlazer);
  }

}
