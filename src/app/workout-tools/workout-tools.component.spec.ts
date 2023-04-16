import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatSqButtonComponent} from "../ui-components/mat-sq-button/mat-sq-button.component";

import { WorkoutToolsComponent } from './workout-tools.component';

describe('WorkoutToolsComponent', () => {
  let component: WorkoutToolsComponent;
  let fixture: ComponentFixture<WorkoutToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutToolsComponent, MatSqButtonComponent ],
      imports: [MatDividerModule, FontAwesomeModule, MatDialogModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
