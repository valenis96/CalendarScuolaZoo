import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCalComponent } from './my-cal.component';

describe('MyCalComponent', () => {
  let component: MyCalComponent;
  let fixture: ComponentFixture<MyCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
