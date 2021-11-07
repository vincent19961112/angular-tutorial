import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergemapComponent } from './mergemap.component';

describe('MergemapComponent', () => {
  let component: MergemapComponent;
  let fixture: ComponentFixture<MergemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergemapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
