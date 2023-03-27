import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsHelpComponent } from './lights-help.component';

describe('LightsComponent', () => {
  let component: LightsHelpComponent;
  let fixture: ComponentFixture<LightsHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightsHelpComponent ]
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
