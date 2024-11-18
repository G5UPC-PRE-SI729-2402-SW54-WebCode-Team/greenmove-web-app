import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslateModule } from '@ngx-translate/core';
import { OwnerService } from '../../services/owner.service';
import { ReservationService } from '../../../reservation/services/reservation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owner-management',
  standalone: true,
  imports: [
    TranslateModule,
    MatProgressBarModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './owner-management.component.html',
  styleUrl: './owner-management.component.scss',
})
export class OwnerManagementComponent implements OnInit {
  reservationsbyOwner: any;
  constructor(
    private ownerService: OwnerService,
    private reservationService: ReservationService
  ) {}
  ngOnInit(): void {
    this.reservationService
      .getReservationsByOwner(2)
      .then((response) => (this.reservationsbyOwner = response));
  }
}
