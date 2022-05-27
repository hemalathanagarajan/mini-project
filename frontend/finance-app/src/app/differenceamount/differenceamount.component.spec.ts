import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferenceamountComponent } from './differenceamount.component';

describe('DifferenceamountComponent', () => {
  let component: DifferenceamountComponent;
  let fixture: ComponentFixture<DifferenceamountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferenceamountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferenceamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
