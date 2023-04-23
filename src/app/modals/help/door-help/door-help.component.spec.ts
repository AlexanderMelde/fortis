import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { DoorHelpComponent } from './door-help.component';

describe('DoorHelpComponent', () => {
  let component: DoorHelpComponent;
  let fixture: ComponentFixture<DoorHelpComponent>;
  let matDialogRefSpy: jasmine.SpyObj<MatDialogRef<DoorHelpComponent>>;

  beforeEach(async () => {
    matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [DoorHelpComponent],
      imports: [MatDialogModule],
      providers: [{ provide: MatDialogRef, useValue: matDialogRefSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the unlock code', () => {
    const codeElement = fixture.debugElement.query(By.css('code')).nativeElement;
    expect(codeElement.innerText).toBe('5467');
  });

  it('should close the dialog when OK button is clicked', () => {
    const okButton = fixture.debugElement.query(By.css('button')).nativeElement;
    okButton.click();
    expect(matDialogRefSpy.close).toHaveBeenCalledWith(true);
  });
});
