import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveReserveComponent } from './active-reserve.component';

describe('ActiveReserveComponent', () => {
  let component: ActiveReserveComponent;
  let fixture: ComponentFixture<ActiveReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveReserveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
