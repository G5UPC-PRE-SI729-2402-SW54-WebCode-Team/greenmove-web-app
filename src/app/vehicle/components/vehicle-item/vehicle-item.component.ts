import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-vehicle-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TranslateModule],
  templateUrl: './vehicle-item.component.html',
  styleUrl: './vehicle-item.component.scss',
})
export class VehicleItemComponent implements OnInit {
  @Input() vehicle: any;
  @Output() vehicleClicked: any = new EventEmitter<any>();

  user: any;
  suscription = true;
  constructor(private router: Router) {}
  ngOnInit(): void {}
  selectVehicle() {
    this.vehicleClicked.emit(this.vehicle);
  }
}
