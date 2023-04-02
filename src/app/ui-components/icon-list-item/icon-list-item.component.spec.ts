import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconListItemComponent } from './icon-list-item.component';

describe('IconListItemComponent', () => {
  let component: IconListItemComponent;
  let fixture: ComponentFixture<IconListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
