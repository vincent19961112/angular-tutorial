import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbortronComponent } from './jumbortron.component';

describe('JumbortronComponent', () => {
  let component: JumbortronComponent;
  let fixture: ComponentFixture<JumbortronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbortronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbortronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
