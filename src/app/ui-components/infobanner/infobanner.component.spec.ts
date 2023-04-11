import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfobannerComponent } from './infobanner.component';
import { MatIconModule } from '@angular/material/icon';

describe('InfobannerComponent', () => {
  let component: InfobannerComponent;
  let fixture: ComponentFixture<InfobannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfobannerComponent],
      imports: [MatIconModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfobannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have mat-icon', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-icon')).toBeTruthy();
  });

});
