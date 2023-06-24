import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerComponent } from './new-customer.component';
import {NavbarComponent} from "../navbar/navbar.component";

describe('NewCustomerComponent', () => {
  let component: NewCustomerComponent;
  let fixture: ComponentFixture<NewCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCustomerComponent]
    });
    fixture = TestBed.createComponent(NewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
