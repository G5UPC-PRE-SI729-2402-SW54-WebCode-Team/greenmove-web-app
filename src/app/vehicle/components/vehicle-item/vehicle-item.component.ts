import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-vehicle-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './vehicle-item.component.html',
  styleUrl: './vehicle-item.component.scss',
})
export class VehicleItemComponent implements OnInit {
  @Input() vehicle: any;
  ngOnInit(): void {}
}
