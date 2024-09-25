import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-suscription',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './not-suscription.component.html',
  styleUrl: './not-suscription.component.scss',
})
export class NotSuscriptionComponent {
  constructor(private router: Router) {}
  goToSuscription(): void {
    this.router.navigate(['suscriptions']);
  }
}
