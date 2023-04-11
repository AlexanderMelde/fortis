import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { faAngleRight, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {of} from "rxjs";

import { HelpComponent } from '../../help/help.component';
import { MatSqButtonComponent } from './mat-sq-button.component';

describe('MatSqButtonComponent', () => {
  let component: MatSqButtonComponent;
  let fixture: ComponentFixture<MatSqButtonComponent>;
  let dialog: MatDialog;
  let matDialogSpy: jasmine.SpyObj<MatDialog>;


  beforeEach(async () => {
    const matDialogSpyObj = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [MatSqButtonComponent],
      imports: [MatDialogModule, FontAwesomeModule],
      providers: [{ provide: MatDialog, useValue: matDialogSpyObj }],
    }).compileComponents();

    fixture = TestBed.createComponent(MatSqButtonComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
    matDialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable the button when [disabled] input is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeTruthy();
  });

  it('should enable the button when [disabled] input is false', () => {
    component.disabled = false;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeFalsy();
  });

  it('should set the icon to faCircleQuestion by default', () => {
    const icon = component.icon;
    expect(icon).toEqual(faCircleQuestion);
  });

  it('should set the icon to faAngleRight when faAngleRight input is provided', () => {
    component.icon = faAngleRight;
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css('fa-icon.main_icon')).componentInstance.icon;
    expect(icon).toEqual(faAngleRight);
  });

  it('should log an error message when [help_topic] and [popup] inputs are not defined', () => {
    spyOn(console, 'log');
    component.onClickHandler();
    expect(console.log).toHaveBeenCalledWith('Nothing happened, either define help_topic or popup.');
  });


  it('should open a dialog when [popup] input is defined', () => {
    const dialogRefSpyObj = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    dialogRefSpyObj.afterClosed.and.returnValue(of(null));
    matDialogSpy.open.and.returnValue(dialogRefSpyObj);

    component.popup = HelpComponent;
    component.help_topic = 'test-topic';
    component.onClickHandler();

    expect(matDialogSpy.open).toHaveBeenCalledWith(HelpComponent, { data: 'test-topic' });
  });


});
