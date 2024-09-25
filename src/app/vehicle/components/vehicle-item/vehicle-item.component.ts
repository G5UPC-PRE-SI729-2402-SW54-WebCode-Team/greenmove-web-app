import { Component, Input, OnInit } from '@angular/core';
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
  user: any;
  suscription = true;
  constructor(private router: Router) {}
  ngOnInit(): void {}
  goTo() {
    if (this.suscription) {
      this.router.navigate(['/rental/successful']);
    } else {
      this.router.navigate(['/not-suscriptions']);
    }
  }
}
