import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDetailCourseComponent } from './child-detail-course.component';

describe('ChildDetailCourseComponent', () => {
  let component: ChildDetailCourseComponent;
  let fixture: ComponentFixture<ChildDetailCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildDetailCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDetailCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
