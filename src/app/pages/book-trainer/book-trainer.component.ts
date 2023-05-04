import {BreakpointObserver} from "@angular/cdk/layout";
import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {StepperOrientation} from "@angular/material/stepper";
import {DateTime} from "luxon";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-book-trainer',
  templateUrl: './book-trainer.component.html',
  styleUrls: ['./book-trainer.component.css']
})
export class BookTrainerComponent {
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  protected readonly DateTime = DateTime;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
}
