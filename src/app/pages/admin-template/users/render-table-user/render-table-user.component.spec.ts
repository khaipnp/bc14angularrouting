import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderTableUserComponent } from './render-table-user.component';

describe('RenderTableUserComponent', () => {
  let component: RenderTableUserComponent;
  let fixture: ComponentFixture<RenderTableUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderTableUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderTableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
