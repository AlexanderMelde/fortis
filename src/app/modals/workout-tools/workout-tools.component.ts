import { Component } from '@angular/core';
import {faClock, faArrowsSpin, faCalculator} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-workout-tools',
  templateUrl: './workout-tools.component.html',
  styleUrls: ['./workout-tools.component.css']
})
export class WorkoutToolsComponent {

  protected readonly faClock = faClock;
  protected readonly faArrowsSpin = faArrowsSpin;
  protected readonly faCalculator = faCalculator;
}
