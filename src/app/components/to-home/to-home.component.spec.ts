import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToHomeComponent } from './to-home.component';

describe('ToHomeComponent', () => {
  let component: ToHomeComponent;
  let fixture: ComponentFixture<ToHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
