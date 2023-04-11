import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskComponent } from './task.component';
import { Task } from '../../models/task.model';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let task: Task;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    task = {
      id: 'test-task-id',
      state: 'TASK_NEW',
      title: 'test-task-title',
    };
    component.task = task;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display task title', () => {
    const titleEl = fixture.nativeElement.querySelector('.title input');
    expect(titleEl.value).toBe(task.title);
  });

  it('should display "Pinned" if task is pinned', () => {
    component.task = {...task, state: 'TASK_PINNED'};
    fixture.detectChanges();
    const pinnedEl = fixture.nativeElement.querySelector('.task_pinned');
    expect(pinnedEl.textContent).toBe('Pinned');
  });

  it('should disable checkbox if task is archived', () => {
    component.task = {...task, state: 'TASK_ARCHIVED'};
    fixture.detectChanges();
    const checkboxEl = fixture.nativeElement.querySelector('input[type="checkbox"]');
    expect(checkboxEl.disabled).toBe(true);
  });

  it('should check checkbox if task is archived', () => {
    component.task = {...task, state: 'TASK_ARCHIVED'};
    fixture.detectChanges();
    const checkboxEl = fixture.nativeElement.querySelector('input[type="checkbox"]');
    expect(checkboxEl.checked).toBe(true);
  });

  it('should emit onPinTask event when pin button is clicked', () => {
    spyOn(component.onPinTask, 'emit');
    const buttonEl = fixture.nativeElement.querySelector('.pin-button');
    buttonEl.click();
    expect(component.onPinTask.emit).toHaveBeenCalledWith(jasmine.any(String));
  });
  // it('should emit onArchiveTask event when checkbox is clicked', () => {
  //   spyOn(component.onArchiveTask, 'emit');
  //   const checkboxEl = fixture.nativeElement.querySelector('input[type="checkbox"]');
  //   checkboxEl.click();
  //   expect(component.onArchiveTask.emit).toHaveBeenCalledWith(jasmine.any(String));
  // });

  it('should not display pin button if task is archived', () => {
    component.task = {...task, state: 'TASK_ARCHIVED'};
    fixture.detectChanges();
    const pinButtonEl = fixture.nativeElement.querySelector('.pin-button');
    expect(pinButtonEl).toBeFalsy();
  });

  // it('should not display checkbox if task is pinned', () => {
  //   component.task = {...task, state: 'TASK_PINNED'};
  //   fixture.detectChanges();
  //   const checkboxEl = fixture.nativeElement.querySelector('input[type="checkbox"]');
  //   expect(checkboxEl).toBeFalsy();
  // });
});
