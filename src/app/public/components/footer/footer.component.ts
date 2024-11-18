import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  router = inject(Router);
  ngOnInit(): void {}
  redirectAbout() {
    this.router.navigate(['/about']);
  }
  redirectProblem() {
    this.router.navigate(['/contact']);
  }
  redirectTips() {}
}
