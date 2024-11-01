import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerProfileManagementComponent } from './owner-profile-management.component';

describe('OwnerProfileManagementComponent', () => {
  let component: OwnerProfileManagementComponent;
  let fixture: ComponentFixture<OwnerProfileManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerProfileManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnerProfileManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
