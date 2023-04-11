import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

import { ClimateHelpComponent } from './climate-help.component';

describe('ClimateHelpComponent', () => {
  let component: ClimateHelpComponent;
  let fixture: ComponentFixture<ClimateHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimateHelpComponent ],
      imports: [MatDialogModule, MatSlideToggleModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimateHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
