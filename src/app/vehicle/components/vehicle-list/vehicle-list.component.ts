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
      urlImg: '../../../../assets/imgs/monark.jpg',
      type: {
        icon: 'bicicle-icon',
        id: '1',
        type: 'Car',
      },
    },
    {
      id: '3',
      name: 'Bicicleta Monark',
      urlImg: '../../../../assets/imgs/monark.jpg',
      type: {
        icon: 'bicicle-icon',
        id: '1',
        type: 'Car',
      },
    },
    {
      id: '4',
      name: 'Bicicleta Monark',
      urlImg: '../../../../assets/imgs/monark.jpg',
      type: {
        icon: 'bicicle-icon',
        id: '1',
        type: 'Car',
      },
    },
    {
      id: '5',
      name: 'Bicicleta Monark',
      urlImg: '../../../../assets/imgs/monark.jpg',
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
      id: '6',
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
