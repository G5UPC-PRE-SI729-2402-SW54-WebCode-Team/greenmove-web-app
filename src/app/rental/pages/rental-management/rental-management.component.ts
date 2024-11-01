import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from '../../../public/components/nav-bar/nav-bar.component';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { MapComponent } from '@maplibre/ngx-maplibre-gl';

import { TranslateModule } from '@ngx-translate/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { RentalService } from '../../services/rental.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rental-management',
  standalone: true,
  imports: [
    NavBarComponent,
    TranslateModule,
    GoogleMapsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MapComponent,
    CommonModule
  ],
  templateUrl: './rental-management.component.html',
  styleUrl: './rental-management.component.scss',
})
export class RentalManagementComponent implements OnInit {
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

  rentalService = inject(RentalService);
  rentalEntrity: any;

  ngOnInit(): void {
    this.rentalEntrity = this.rentalService
      .getById(1)
      .subscribe((response: any) => (this.rentalEntrity = response[0]));
  }
}
