import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSuscriptionComponent } from './not-suscription.component';

describe('NotSuscriptionComponent', () => {
  let component: NotSuscriptionComponent;
  let fixture: ComponentFixture<NotSuscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotSuscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotSuscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
