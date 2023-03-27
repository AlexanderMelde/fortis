import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindsHelpComponent } from './blinds-help.component';

describe('BlindsHelpComponent', () => {
  let component: BlindsHelpComponent;
  let fixture: ComponentFixture<BlindsHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlindsHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlindsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
