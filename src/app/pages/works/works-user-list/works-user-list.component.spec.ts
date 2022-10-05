import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksUserListComponent } from './works-user-list.component';

describe('WorksUserListComponent', () => {
  let component: WorksUserListComponent;
  let fixture: ComponentFixture<WorksUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
