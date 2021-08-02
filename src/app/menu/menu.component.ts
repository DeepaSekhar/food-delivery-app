import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodDeliveryService } from '../food-delivery.service';
import { Restaurents } from '../models/restaurent.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  restauentMenu$: Observable<Restaurents[]> | undefined;
  constructor(private foodDeliveryService: FoodDeliveryService) {}

  ngOnInit(): void {
    this.restauentMenu$ = this.foodDeliveryService.getRestaurents();
    this.restauentMenu$.subscribe((res) =>
      console.log('response from menu component', res)
    );
  }
}