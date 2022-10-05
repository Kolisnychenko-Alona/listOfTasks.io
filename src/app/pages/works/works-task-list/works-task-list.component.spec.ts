import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksTaskListComponent } from './works-task-list.component';

describe('WorksTaskListComponent', () => {
  let component: WorksTaskListComponent;
  let fixture: ComponentFixture<WorksTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
