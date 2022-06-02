import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetingTipsComponent } from './budgeting-tips.component';

describe('BudgetingTipsComponent', () => {
  let component: BudgetingTipsComponent;
  let fixture: ComponentFixture<BudgetingTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetingTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
