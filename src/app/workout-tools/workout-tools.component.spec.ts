import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutToolsComponent } from './workout-tools.component';

describe('WorkoutToolsComponent', () => {
  let component: WorkoutToolsComponent;
  let fixture: ComponentFixture<WorkoutToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
