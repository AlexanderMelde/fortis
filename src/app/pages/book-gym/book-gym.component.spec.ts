import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGymComponent } from './book-gym.component';

describe('BookGymComponent', () => {
  let component: BookGymComponent;
  let fixture: ComponentFixture<BookGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookGymComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
