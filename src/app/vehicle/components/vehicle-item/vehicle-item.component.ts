import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-vehicle-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TranslateModule],
  templateUrl: './vehicle-item.component.html',
  styleUrl: './vehicle-item.component.scss',
})
export class VehicleItemComponent implements OnInit {
  @Input() vehicle: any;
  @Output() vehicleClicked: any = new EventEmitter<any>();

  user: any;
  suscription = true;
  constructor(private router: Router, private translate: TranslateService) {}
  ngOnInit(): void {}
  selectVehicle() {
    this.vehicleClicked.emit(this.vehicle);
  }
  convertWord(p: string): string {
    let translatedWord = '';
    this.translate.get(`VEHICLE.CARD.${p}`).subscribe((translation) => {
      translatedWord = translation || '';
    });

    return translatedWord;
  }

  convertState(p: string) {
    let translatedWord = '';
    this.translate.get(`VEHICLE.CARD.${p}`).subscribe((translation) => {
      translatedWord = translation || '';
    });

    return translatedWord;
  }
}
