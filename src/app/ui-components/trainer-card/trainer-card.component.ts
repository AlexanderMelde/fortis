import {Component, Input} from '@angular/core';
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.css']
})
export class TrainerCardComponent {
  @Input() name: string | undefined;
  @Input() stepper: MatStepper | undefined;
}
