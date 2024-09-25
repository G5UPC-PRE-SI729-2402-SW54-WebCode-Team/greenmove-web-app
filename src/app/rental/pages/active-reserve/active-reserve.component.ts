import { Component } from '@angular/core';
import { NavBarComponent } from '../../../public/components/nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-active-reserve',
  standalone: true,
  imports: [NavBarComponent, MatIconModule, MatButtonModule],
  templateUrl: './active-reserve.component.html',
  styleUrl: './active-reserve.component.scss',
})
export class ActiveReserveComponent {}
