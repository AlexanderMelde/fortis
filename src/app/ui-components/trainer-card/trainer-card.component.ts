import {BooleanInput} from "@angular/cdk/coercion";
import {Component, Input, OnInit} from '@angular/core';
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.css']
})
export class TrainerCardComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() stepper: MatStepper | undefined;
  @Input() primary: BooleanInput;
  ngOnInit() {
    this.primary = this.primary !== undefined;
    console.log(this.primary)
  }
}
