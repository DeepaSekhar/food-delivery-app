import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FoodDeliveryService } from './food-delivery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'food-delivery-app';
  loginUser$: Observable<String | null>;
  constructor(private foodDeliveryService: FoodDeliveryService) {
    this.loginUser$ = this.foodDeliveryService.loginUser$;
  }
}
