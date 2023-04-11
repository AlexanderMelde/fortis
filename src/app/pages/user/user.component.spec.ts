import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatLuxonDateModule} from "@angular/material-luxon-adapter";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InfobannerComponent} from "../../ui-components/infobanner/infobanner.component";
import {
  MatAccordionResponsiveComponent
} from "../../ui-components/mat-accordion-responsive/mat-accordion-responsive.component";

import {UserComponent} from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent, MatAccordionResponsiveComponent, InfobannerComponent],
      imports: [MatCardModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatSelectModule,
        MatCheckboxModule, MatDatepickerModule, MatLuxonDateModule, BrowserAnimationsModule, MatIconModule,
        FormsModule, ReactiveFormsModule, MatInputModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
