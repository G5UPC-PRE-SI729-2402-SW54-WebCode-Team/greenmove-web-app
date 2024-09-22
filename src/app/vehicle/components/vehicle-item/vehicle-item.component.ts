import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './vehicle-item.component.html',
  styleUrl: './vehicle-item.component.scss',
})
export class VehicleItemComponent implements OnInit {
  @Input() vehicle: any;
  constructor(private router: Router) {}
  ngOnInit(): void {}
  goTo() {
    this.router.navigate(['/rental/successful']);
  }
}
