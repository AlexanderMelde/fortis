import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorHelpComponent } from './door-help.component';

describe('DoorHelpComponent', () => {
  let component: DoorHelpComponent;
  let fixture: ComponentFixture<DoorHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoorHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoorHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
