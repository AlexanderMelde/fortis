import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import helpDatabase from './help_database.json';
import { HelpComponent } from './help.component';

describe('HelpComponent', () => {
  let component: HelpComponent;
  let fixture: ComponentFixture<HelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [HelpComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: 'help_hairdryer'
        },
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display help content for hair dryer', () => {
    const testContentRef = 'help_hairdryer';
    const helpItem = helpDatabase[testContentRef];
    const h2Element = fixture.nativeElement.querySelector('h2');
    const matDialogContentElement = fixture.nativeElement.querySelector('mat-dialog-content');

    expect(h2Element.textContent).toEqual(helpItem.title);
    expect(matDialogContentElement.innerHTML).toEqual(helpItem.content);
  });
});
