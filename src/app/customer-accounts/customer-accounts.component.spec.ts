import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountsComponent } from './customer-accounts.component';

describe('CustomerAccountsComponent', () => {
  let component: CustomerAccountsComponent;
  let fixture: ComponentFixture<CustomerAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerAccountsComponent]
    });
    fixture = TestBed.createComponent(CustomerAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
