import {Pipe, PipeTransform} from '@angular/core';
import { Blazer } from './blazer.model';
import { BlazerService } from './blazer.service';

@Pipe({
  name: 'filter',
  pure: false
})


export class FilterPipe implements PipeTransform {
  transform(input: Blazer[], desiredPosition) {
    if (input) {
      var output: Blazer[] = [];
      if (desiredPosition === "shootingGuard") {
        for(var i = 0; i < input.length; i++) {
          if (input[i].position === "shooting guard") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredPosition === "pointGuard") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position === "point guard") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredPosition === "smallForward") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position === "small forward") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredPosition === "powerForward") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position === "power forward") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredPosition === "center") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position === "center") {
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
