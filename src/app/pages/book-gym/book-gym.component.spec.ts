import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatStepperModule} from "@angular/material/stepper";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { BookGymComponent } from './book-gym.component';

describe('BookGymComponent', () => {
  let component: BookGymComponent;
  let fixture: ComponentFixture<BookGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookGymComponent ],
      imports: [MatCardModule, MatStepperModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule, BrowserAnimationsModule]
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
