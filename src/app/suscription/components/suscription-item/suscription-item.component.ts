import { Component, Input, OnInit } from '@angular/core';
import { ISuscription } from '../../interfaces/ISuscription';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-suscription-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TranslateModule],
  templateUrl: './suscription-item.component.html',
  styleUrl: './suscription-item.component.scss',
})
export class SuscriptionItemComponent implements OnInit {
  @Input() suscription: ISuscription = {
    id: '',
    name: '',
    price: 0,
    benefits: { segure: '', time: 0, vehicles: 0 },
  };

  ngOnInit(): void {}
}
