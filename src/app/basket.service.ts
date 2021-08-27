import { getNumberOfCurrencyDigits } from '@angular/common';
import { Injectable } from '@angular/core';
import { Restaurents } from './models/restaurent.interface';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  restaurentMenu$: Restaurents[] | undefined;
  constructor() {}

  getMenu(menu: Restaurents[]) {
    this.restaurentMenu$ = menu;
    console.log('basket service', this.restaurentMenu$);
  }
  

}

