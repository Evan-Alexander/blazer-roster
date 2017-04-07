import { Component, OnInit, Input } from '@angular/core';
import { Blazer } from '../blazer.model'
import { BlazerService } from '../blazer.service';

@Component({
  selector: 'app-edit-blazer',
  templateUrl: './edit-blazer.component.html',
  styleUrls: ['./edit-blazer.component.css'],
  providers: [BlazerService]
})
export class EditBlazerComponent implements OnInit {
  @Input() selectedBlazer;

  constructor(private blazerService: BlazerService) { }

  ngOnInit() {
  }

  beginUpdatingBlazer(blazerToUpdate) {
    this.blazerService.updateBlazer(blazerToUpdate);
    console.log(blazerToUpdate);
  }

  beginDeletingBlazer(blazerToDelete) {
    if(confirm("Are you sure you want to delete this player from the roster?")) {
      this.blazerService.deleteBlazer(blazerToDelete);
    }
    console.log(blazerToDelete);
  }

}
