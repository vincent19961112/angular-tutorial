import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTutrialComponent } from './add-tutrial.component';

describe('AddTutrialComponent', () => {
  let component: AddTutrialComponent;
  let fixture: ComponentFixture<AddTutrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTutrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTutrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
