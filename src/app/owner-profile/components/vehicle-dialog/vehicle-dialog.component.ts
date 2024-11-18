import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { VehicleType } from '../../../vehicle/models/vehicle-type.enum';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-vehicle-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    GoogleMapsModule,
  ],
  templateUrl: './vehicle-dialog.component.html',
  styleUrl: './vehicle-dialog.component.scss',
})
export class VehicleDialogComponent implements OnInit {
  selectedFileName: string | null = null;

  options = [
    { value: VehicleType.ELECTRICBIKE, title: 'Bicicleta Electrica' },
    { value: VehicleType.ELECTRICCAR, title: 'Carro Electrico' },
    { value: VehicleType.ELECTRICSCOOTER, title: 'Scooter Electrico' },
  ];
  selectedValue: any;
  vehicleForm: FormGroup;
  name: string;

  map: google.maps.Map | undefined;
  autocomplete: google.maps.places.Autocomplete | undefined;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<VehicleDialogComponent>
  ) {}
  ngOnInit(): void {
    this.vehicleForm = this.fb.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      file: [],
      speed: ['', Validators.required],
    });
  }

  sendAddVehicle(): void {
    console.log('this.vehicleform', this.vehicleForm.value);
    this.dialogRef.close(this.vehicleForm.value);
  }
  onFileSelected(event: Event): void {
    console.log('event', event.target);
    const input: any = event.target;
    const file = input.files[0];
    this.vehicleForm.get('file')?.setValue(file.name);
  }
}
