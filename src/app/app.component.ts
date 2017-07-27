import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isIn = false;
  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
  getBodyMargin() {
    if (this.isIn === true) {
      return '22%';
    } else {
      return '';
    }
  }
  title = 'Blazer Roster';
}
