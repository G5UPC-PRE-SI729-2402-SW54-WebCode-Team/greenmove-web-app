import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorBookingComponent } from './error-booking.component';

describe('ErrorBookingComponent', () => {
  let component: ErrorBookingComponent;
  let fixture: ComponentFixture<ErrorBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
