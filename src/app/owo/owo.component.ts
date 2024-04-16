import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { SearchBoxComponent } from '../search-box/search-box.component';

@Component({
  selector: 'app-owo',
  standalone: true,
  imports: [MenuComponent, SearchBoxComponent],
  templateUrl: './owo.component.html',
  styleUrl: './owo.component.css'
})
export class OwoComponent {
  title = 'vuelos-app'
  showPrice = true
  fnShowPrice() {
    this.showPrice = !this.showPrice
  }
  flights = {
    id: 1,
    lowerPrice: true,
    flightDate: '2:50 pm',
    flightFrom: 'MED',
    arriveDate: '4:50 pm',
    flightTo: 'BOG',
    price: 'COP 90.000,00'
  }

}
