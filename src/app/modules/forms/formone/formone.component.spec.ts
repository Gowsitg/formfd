import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormoneComponent } from './formone.component';

describe('FormoneComponent', () => {
  let component: FormoneComponent;
  let fixture: ComponentFixture<FormoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormoneComponent]
    });
    fixture = TestBed.createComponent(FormoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
