import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GymCardComponent } from './gym-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconListComponent } from '../icon-list/icon-list.component';
import { IconListItemComponent } from '../icon-list-item/icon-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

describe('GymCardComponent', () => {
  let component: GymCardComponent;
  let fixture: ComponentFixture<GymCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GymCardComponent,
        IconListComponent,
        IconListItemComponent
      ],
      imports: [
        FontAwesomeModule,
        RouterTestingModule,
        MatCardModule,
        MatDividerModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display gym name and description', () => {
    component.name = 'My Gym';
    component.description = 'A great place to workout';
    fixture.detectChanges();
    const titleEl = fixture.nativeElement.querySelector('mat-card-title');
    const subtitleEl = fixture.nativeElement.querySelector('mat-card-subtitle');
    expect(titleEl.textContent).toContain('My Gym');
    expect(subtitleEl.textContent).toContain('A great place to workout');
  });

  it('should display icon list items', () => {
    component.name = 'My Gym';
    fixture.detectChanges();
    const items = fixture.nativeElement.querySelectorAll('app-icon-list-item');
    expect(items.length).toEqual(2);
    expect(items[0].querySelector('span b').textContent).toContain(component.name);
  });

  it('should have a button to book gym', () => {
    fixture.detectChanges();
    const buttonEl = fixture.nativeElement.querySelector('mat-card-actions a');
    expect(buttonEl.textContent.trim()).toEqual('Book gym');
    expect(buttonEl.getAttribute('ng-reflect-router-link')).toEqual('/book_gym');
  });
});
