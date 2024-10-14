import { Component } from '@angular/core';
import { IVehicle } from '../../interfaces/IVehicle';
import { VehicleItemComponent } from '../vehicle-item/vehicle-item.component';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [VehicleItemComponent],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss',
})
export class VehicleListComponent {
  vehicles: IVehicle[] = [
    {
      id: '1',
      name: 'Bicicleta Monark',
      urlImg: '../../../../assets/imgs/monark.jpg',
      type: {
        icon: 'bicicle-icon',
        id: '1',
        type: 'Car',
      },
    },
    {
      id: '2',
      name: 'Bicicleta Monark',
      urlImg: '../../../../assets/imgs/box-vintage.jpg',
      type: {
        icon: 'bicicle-icon',
        id: '1',
        type: 'Car',
      },
    },
    {
      id: '3',
      name: 'Bicicleta Monark',
      urlImg: '../../../../assets/imgs/montanera-plegable.jpg',
      type: {
        icon: 'bicicle-icon',
        id: '1',
        type: 'Car',
      },
    },
    {
      id: '4',
      name: 'Scooter Xaiomi',
      urlImg: '../../../../assets/imgs/xiaomi-scooter.jpg',
      type: {
        icon: 'bicicle-icon',
        id: '1',
        type: 'Scooter',
      },
    },
    {
      id: '5',
      name: 'Renault R1',
      urlImg: '../../../../assets/imgs/renault-auto.jpg',
      type: {
        icon: 'bicicle-icon',
        id: '1',
        type: 'Car',
      },
    },
    {
      id: '6',
      name: 'Bicicleta Monark',
      urlImg: '../../../../assets/imgs/monark.jpg',
      type: {
        icon: 'bicicle-icon',
        id: '1',
        type: 'Car',
      },
    },
    {
      id: '7',
      name: 'Bicicleta Monark',
      urlImg: '../../../../assets/imgs/monark.jpg',
      type: {
        icon: 'bicicle-icon',
        id: '1',
        type: 'Car',
      },
    },
    {
      id: '8',
      name: 'Peugeot R900',
      urlImg: '../../../../assets/imgs/peugeot-auto.jpg',
      type: {
        icon: 'bicicle-icon',
        id: '1',
        type: 'Car',
      },
    },
    {
      id: '9',
      name: 'Bicicleta Monark',
      urlImg: '../../../../assets/imgs/monark.jpg',
      type: {
        icon: 'bicicle-icon',
        id: '1',
        type: 'Car',
      },
    },
  ];
}
