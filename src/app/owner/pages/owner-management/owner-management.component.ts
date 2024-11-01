import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-owner-management',
  standalone: true,
  imports: [TranslateModule, MatProgressBarModule, MatButtonModule],
  templateUrl: './owner-management.component.html',
  styleUrl: './owner-management.component.scss',
})
export class OwnerManagementComponent implements OnInit {
  ngOnInit(): void {}
}
