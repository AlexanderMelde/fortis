import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatSqButtonComponent} from "../../../ui-components/mat-sq-button/mat-sq-button.component";

import { LightsHelpComponent } from './lights-help.component';

describe('LightsComponent', () => {
  let component: LightsHelpComponent;
  let fixture: ComponentFixture<LightsHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightsHelpComponent, MatSqButtonComponent ],
      imports: [MatDialogModule, FontAwesomeModule, MatSlideToggleModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
