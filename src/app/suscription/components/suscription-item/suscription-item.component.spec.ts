import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriptionItemComponent } from './suscription-item.component';

describe('SuscriptionItemComponent', () => {
  let component: SuscriptionItemComponent;
  let fixture: ComponentFixture<SuscriptionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuscriptionItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuscriptionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
