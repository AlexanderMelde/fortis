import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../models/task.model';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListComponent, TaskComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "You have no tasks" when tasksInOrder is empty and loading is false', () => {
    component.tasksInOrder = [];
    component.loading = false;
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.list-items div');
    expect(element.textContent).toContain('You have no tasks');
  });

  it('should render loading items when loading is true', () => {
    component.loading = true;
    fixture.detectChanges();
    const elements = fixture.nativeElement.querySelectorAll('.loading-item');
    expect(elements.length).toBe(6);
  });

  it('should render TaskComponent for each task in tasksInOrder', () => {
    const tasks: Task[] = [
      { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
      { id: '2', title: 'Task 2', state: 'TASK_PINNED' },
      { id: '3', title: 'Task 3', state: 'TASK_ARCHIVED' },
    ];
    component.tasks = tasks;
    fixture.detectChanges();
    const elements = fixture.nativeElement.querySelectorAll('app-task');
    expect(elements.length).toBe(2);
  });

  // it('should emit onArchiveTask when a task is archived', () => {
  //   const task: Task = { id: '1', title: 'Task 1', state: 'TASK_INBOX' };
  //   component.tasksInOrder = [task];
  //   fixture.detectChanges();
  //   spyOn(component.onArchiveTask, 'emit');
  //   const element = fixture.nativeElement.querySelector('.checkbox-custom');
  //   element.dispatchEvent(new Event('click'));
  //   expect(component.onArchiveTask.emit).toHaveBeenCalledWith(task.id);
  // });
  //
  // it('should emit onPinTask when a task is pinned', () => {
  //   const task: Task = { id: '1', title: 'Task 1', state: 'TASK_INBOX' };
  //   component.tasksInOrder = [task];
  //   fixture.detectChanges();
  //   spyOn(component.onPinTask, 'emit');
  //   const element = fixture.nativeElement.querySelector('.pin-button');
  //   element.dispatchEvent(new Event('click'));
  //   expect(component.onPinTask.emit).toHaveBeenCalledWith(task.id);
  // });
});
