import {DebugElement} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {By} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Router} from "@angular/router";
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {WorkoutToolsComponent} from "./workout-tools/workout-tools.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, WorkoutToolsComponent],
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        BrowserAnimationsModule
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
    spyOn(router, 'navigateByUrl');

  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a navigation bar with links', () => {
    const navBar = fixture.nativeElement.querySelector('nav[mat-tab-nav-bar]');
    expect(navBar).toBeTruthy();

    const navLinks = fixture.nativeElement.querySelectorAll('a[mat-tab-link]');
    expect(navLinks.length).toBe(component.navLinks.length);

    for (let i = 0; i < component.navLinks.length; i++) {
      expect(navLinks[i].textContent).toBe(component.navLinks[i].label);
    }
  });


  // it('should have no active nav link if the current page is not in the list of menu entries', fakeAsync(() => {
  //   component.navLinks = [];
  //   fixture.detectChanges();
  //   component.ngOnInit();
  //   tick();
  //   router.navigateByUrl('/this-page-does-not-exist');
  //   tick();
  //   expect(component.activeLinkIndex).toBe(-1);
  // }));


  it('should toggle start sidenav when menu button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.toggle_nav_side_btn'));
    const sidenavStart = fixture.debugElement.query(By.css('.nav_side'));

    expect(sidenavStart.componentInstance.opened).toBe(false);
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(sidenavStart.componentInstance.opened).toBe(true);
  });

});
