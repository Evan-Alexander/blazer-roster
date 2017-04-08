import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { BlazerService } from '../blazer.service';
import { Blazer } from '../blazer.model';

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

  submitForm(name: string, position: string, height: string, description: string, photo: string) {
    if (!name || !position || !height || !description || !photo) {
      alert("Please fill in all fields and resubmit.");
    } else {
      var newBlazer: Blazer = new Blazer(name, position, height, description, photo);
      this.blazerService.addBlazer(newBlazer);
      alert("Entry Submitted!");
    }
  }
}
