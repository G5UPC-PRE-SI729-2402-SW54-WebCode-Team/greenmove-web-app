import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './auth/register/register.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'greenmove-web-app';
}
