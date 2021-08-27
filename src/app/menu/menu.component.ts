import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BasketService } from '../basket.service';
import { FoodDeliveryService } from '../food-delivery.service';
import { Restaurents } from '../models/restaurent.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  restauentMenu$: Observable<Restaurents[]> | undefined;
  menuId: any;

  constructor(
    private foodDeliveryService: FoodDeliveryService,
    private basketService: BasketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restauentMenu$ = this.foodDeliveryService.getRestaurents();
    this.restauentMenu$.subscribe((res) =>
      console.log('response from menu component', res)
    );

    this.route.paramMap.subscribe((parameterMap) => {
      console.log('parameterMap', parameterMap);
      let id = parameterMap.get('id') ?? '1';
      this.foodDeliveryService.getRestaurentById(parseInt(id));

      // console.log(menuId);
    });
  }

  addToBasket(menu: Restaurents[]) {
    this.basketService.getMenu(menu);
  }
}
