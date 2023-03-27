import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateHelpComponent } from './climate-help.component';

describe('ClimateHelpComponent', () => {
  let component: ClimateHelpComponent;
  let fixture: ComponentFixture<ClimateHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimateHelpComponent ]
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
