import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {IconListItemComponent} from "../../ui-components/icon-list-item/icon-list-item.component";
import {IconListComponent} from "../../ui-components/icon-list/icon-list.component";
import {MatSqButtonComponent} from "../../ui-components/mat-sq-button/mat-sq-button.component";
import {RoomComponent} from './room.component';

describe('RoomComponent', () => {
  let component: RoomComponent;
  let fixture: ComponentFixture<RoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomComponent, IconListComponent, IconListItemComponent, MatSqButtonComponent],
      imports: [MatCardModule, MatDividerModule, FontAwesomeModule, MatDialogModule, MatToolbarModule, MatIconModule, MatSliderModule, MatBottomSheetModule, MatProgressBarModule, MatRippleModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the room title', () => {
    const title = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toContain('Current Workout');
  });

  it('should display the booking information', () => {
    const bookingInfo = fixture.nativeElement.querySelector('.room-details-card');
    expect(bookingInfo).toBeTruthy();
  });

  it('should display the amenities section', () => {
    const amenitiesSection = fixture.nativeElement.querySelector('#amenities');
    expect(amenitiesSection).toBeTruthy();
  });

  // it('should toggle the workout tools when the "Open Workout Tools" button is clicked', () => {
  //   const button = fixture.nativeElement.querySelector('button[color="primary"]');
  //   button.click();
  //   fixture.detectChanges();
  //   const workoutTools = fixture.nativeElement.querySelector('.workout-tools');
  //   expect(workoutTools).toBeTruthy();
  // });
});
