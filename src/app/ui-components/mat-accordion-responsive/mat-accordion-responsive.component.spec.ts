import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatExpansionModule} from "@angular/material/expansion";

import { MatAccordionResponsiveComponent } from './mat-accordion-responsive.component';

describe('MatAccordionResponsiveComponent', () => {
  let component: MatAccordionResponsiveComponent;
  let fixture: ComponentFixture<MatAccordionResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatAccordionResponsiveComponent ],
      imports: [MatExpansionModule]
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
