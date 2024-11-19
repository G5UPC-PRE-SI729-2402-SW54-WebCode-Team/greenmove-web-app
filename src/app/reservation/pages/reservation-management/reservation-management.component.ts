import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from '../../../public/components/nav-bar/nav-bar.component';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { MapComponent } from '@maplibre/ngx-maplibre-gl';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReservationService } from '../../services/reservation.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reservation-management',
  standalone: true,
  imports: [
    NavBarComponent,
    TranslateModule,
    GoogleMapsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MapComponent,
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './reservation-management.component.html',
  styleUrl: './reservation-management.component.scss',
})
export class ReservationManagementComponent implements OnInit {
  readonly panelOpenState = signal(false);
  owners = [
    {
      id: 1,
      name: 'Drako Domingo',
      urlImage: '../../../../assets/imgs/mo nark.jpg',
      phone: 99292912,
      rate: 4.2,
      ubication: 'San Isidro',
    },
  ];
  center: google.maps.LatLngLiteral = {
    lat: -12.099120170974512,
    lng: -77.03824808525513,
  };
  zoom = 18;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPosition: google.maps.LatLngLiteral = {
    lat: -12.099120170974512,
    lng: -77.03824808525513,
  };
  idReservation: any;
  reservationService = inject(ReservationService);
  reservationEntrity: any;
  constructor(
    private activedRouter: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) {
    this.activedRouter.params.subscribe((params) => {
      this.idReservation = params['id'];
    });
  }
  ngOnInit(): void {
    this.reservationService
      .getById(this.idReservation)
      .subscribe((response: any) => {
        this.reservationEntrity = response;
      });
  }

  terminateReservation() {
    this.reservationService
      .updateReservation(this.idReservation, 'COMPLETED')
      .then((response) => {
        if (response) {
          this.router.navigate(['/']);
        }
      });
  }

  convertWord(p: string): string {
    let translatedWord = '';
    this.translate.get(`VEHICLE.CARD.${p}`).subscribe((translation) => {
      translatedWord = translation || '';
    });

    return translatedWord;
  }
}
