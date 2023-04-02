import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAccordionResponsiveComponent } from './mat-accordion-responsive.component';

describe('MatExpansionPanelResponsiveComponent', () => {
  let component: MatAccordionResponsiveComponent;
  let fixture: ComponentFixture<MatAccordionResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatAccordionResponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatAccordionResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
