import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatExpansionPanelResponsiveComponent } from './mat-expansion-panel-responsive.component';

describe('MatExpansionPanelResponsiveComponent', () => {
  let component: MatExpansionPanelResponsiveComponent;
  let fixture: ComponentFixture<MatExpansionPanelResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatExpansionPanelResponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatExpansionPanelResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
