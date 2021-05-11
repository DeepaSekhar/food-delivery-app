import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodDeliveryService } from '../food-delivery.service';
import { Restaurents } from '../models/restaurent.interface'

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.scss']
})
export class RestaurentComponent implements OnInit {
  restaurents$: Observable<Restaurents[]> | undefined
  constructor(private foodDeliveryService: FoodDeliveryService) { }

  ngOnInit(): void {
    this.restaurents$ = this.foodDeliveryService.getRestaurents();
    console.log("restaurents", this.restaurents$);
  }

}
