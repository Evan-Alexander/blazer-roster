import {Pipe, PipeTransform} from '@angular/core';
import { Blazer } from './blazer.model';
import { BlazerService } from './blazer.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Pipe({
  name: 'filter',
  pure: false
})


export class FilterPipe implements PipeTransform {
  // Blazer: [];

  transform(input: Blazer[], desiredPosition) {
    if (input) {
      var output: Blazer[] = [];
      if (desiredPosition === "shootingGuard") {
        for(var i = 0; i < input.length; i++) {
          if (input[i].position === "Shooting Guard") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredPosition === "pointGuard") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position === "Point Guard") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredPosition === "smallForward") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position === "Small Forward") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredPosition === "powerForward") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position === "Power Forward") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredPosition === "center") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position === "Center") {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }
  }
}
      // } else if (desiredPosition === "smallForward") {
      //   for (var i = 0; i < input.length; i++) {
      //     if (input[i].position === true) {
      //       output.push(input[i]);
      //     }
      //   }
      //   return output;
      // } else if (desiredPosition === "powerForward") {
      //   for (var i = 0; i < input.length; i++) {
      //     if (input[i].position === true) {
      //       output.push(input[i]);
      //     }
      //   }
      //   return output;
      // } else if (desiredPosition === "center") {
      //   for (var i = 0; i < input.length; i++) {
      //     if (input[i].position === true) {
      //       output.push(input[i]);
      //     }
      //   }
      //   return output;
      // } else {
      //   return input;
