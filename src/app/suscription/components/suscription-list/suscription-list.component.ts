import { Component, Input } from '@angular/core';
import { ISuscription } from '../../interfaces/ISuscription';
import { SuscriptionItemComponent } from '../suscription-item/suscription-item.component';

@Component({
  selector: 'app-suscription-list',
  standalone: true,
  imports: [SuscriptionItemComponent],
  templateUrl: './suscription-list.component.html',
  styleUrl: './suscription-list.component.scss',
})
export class SuscriptionListComponent {
  suscriptions: ISuscription[] = [
    {
      id: '1',
      name: 'Basico',
      price: 20,
      benefits: {
        segure: 'Basico',
        time: 4,
        vehicles: 10,
      },
    },
    {
      id: '2',
      name: 'Intermedio',
      price: 80,
      benefits: {
        segure: 'Basico',
        time: 4,
        vehicles: 10,
      },
    },
    {
      id: '3',
      name: 'Avanzado',
      price: 120,
      benefits: {
        segure: 'Basico',
        time: 8,
        vehicles: 30,
      },
    },
  ];
}
