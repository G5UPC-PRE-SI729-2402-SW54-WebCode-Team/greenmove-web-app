import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from '../../../public/components/nav-bar/nav-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful-booking',
  standalone: true,
  imports: [MatIconModule, NavBarComponent, MatButtonModule],
  templateUrl: './successful-booking.component.html',
  styleUrl: './successful-booking.component.scss',
})
export class SuccessfulBookingComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private router: Router) {}
  goToActiveReserve() {
    this.router.navigate(['/reserve-active']);
  }
}
