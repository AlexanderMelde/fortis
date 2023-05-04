import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LuxonDateModule, MatLuxonDateModule} from "@angular/material-luxon-adapter";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatStepperModule} from "@angular/material/stepper";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {GymCardComponent} from "../../ui-components/gym-card/gym-card.component";
import {IconListItemComponent} from "../../ui-components/icon-list-item/icon-list-item.component";
import {IconListComponent} from "../../ui-components/icon-list/icon-list.component";
import {TrainerCardComponent} from "../../ui-components/trainer-card/trainer-card.component";

import { BookGymComponent } from './book-gym.component';

describe('BookGymComponent', () => {
  let component: BookGymComponent;
  let fixture: ComponentFixture<BookGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookGymComponent, GymCardComponent, TrainerCardComponent,
        IconListComponent, IconListItemComponent ],
      imports: [MatCardModule, MatStepperModule, MatFormFieldModule, FormsModule,
        ReactiveFormsModule, MatInputModule, BrowserAnimationsModule, MatDatepickerModule,
        LuxonDateModule, MatLuxonDateModule, MatSidenavModule, MatListModule, FontAwesomeModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
