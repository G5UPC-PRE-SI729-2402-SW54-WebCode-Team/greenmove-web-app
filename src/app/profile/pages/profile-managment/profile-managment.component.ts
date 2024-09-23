import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-managment',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './profile-managment.component.html',
  styleUrl: './profile-managment.component.scss',
})
export class ProfileManagmentComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  goToBookingActive(): void {
    this.router.navigate(['/booking-active']);
  }
}
