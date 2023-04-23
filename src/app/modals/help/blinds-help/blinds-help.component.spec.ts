import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BlindsHelpComponent } from './blinds-help.component';

describe('BlindsHelpComponent', () => {
  let component: BlindsHelpComponent;
  let fixture: ComponentFixture<BlindsHelpComponent>;
  let matDialogRefSpy: jasmine.SpyObj<MatDialogRef<BlindsHelpComponent>>;

  beforeEach(async () => {
    matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [ BlindsHelpComponent ],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlindsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog when OK button is clicked', () => {
    const okButton = fixture.nativeElement.querySelector('button');
    okButton.click();

    expect(matDialogRefSpy.close).toHaveBeenCalledWith(true);
  });
});
