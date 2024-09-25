import { CommonModule, Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  @Input() title: string;
  constructor(private location: Location, private router: Router) {
    this.title = '';
  }
  goToBack(): void {
    this.goToHome();
  }

  goToHome(): void {
    this.router.navigate(['/'], { replaceUrl: true });
  }
}
