import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSqButtonComponent } from './mat-sq-button.component';

describe('MatSqButtonComponent', () => {
  let component: MatSqButtonComponent;
  let fixture: ComponentFixture<MatSqButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSqButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSqButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
