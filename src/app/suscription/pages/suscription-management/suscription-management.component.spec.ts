import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriptionManagementComponent } from './suscription-management.component';

describe('SuscriptionManagementComponent', () => {
  let component: SuscriptionManagementComponent;
  let fixture: ComponentFixture<SuscriptionManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuscriptionManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuscriptionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
