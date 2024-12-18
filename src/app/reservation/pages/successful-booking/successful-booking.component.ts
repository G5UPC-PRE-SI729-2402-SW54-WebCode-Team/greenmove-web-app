import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from '../../../public/components/nav-bar/nav-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-successful-booking',
  standalone: true,
  imports: [MatIconModule, NavBarComponent, MatButtonModule, TranslateModule],
  templateUrl: './successful-booking.component.html',
  styleUrl: './successful-booking.component.scss',
})
export class SuccessfulBookingComponent implements OnInit {
  ngOnInit(): void {}
  idReservation: any;
  constructor(private router: Router, private activedRouter: ActivatedRoute) {
    this.activedRouter.params.subscribe((params) => {
      this.idReservation = params['id'];
    });
  }
  goToActiveReserve() {
    this.router.navigate(['/reservation-manegement', this.idReservation]);
  }
}
