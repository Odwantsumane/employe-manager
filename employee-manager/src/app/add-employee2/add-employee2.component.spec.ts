import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployee2Component } from './add-employee2.component';

describe('AddEmployee2Component', () => {
  let component: AddEmployee2Component;
  let fixture: ComponentFixture<AddEmployee2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmployee2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployee2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
