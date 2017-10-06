import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfFormComponent } from './ff-form.component';

describe('FfFormComponent', () => {
  let component: FfFormComponent;
  let fixture: ComponentFixture<FfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
