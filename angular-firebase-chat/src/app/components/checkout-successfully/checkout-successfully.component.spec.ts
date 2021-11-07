import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSuccessfullyComponent } from './checkout-suessfully.component';

describe('CheckoutSuessfullyComponent', () => {
  let component: CheckoutSuccessfullyComponent;
  let fixture: ComponentFixture<CheckoutSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutSuccessfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
