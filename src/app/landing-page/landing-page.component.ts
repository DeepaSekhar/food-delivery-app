import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FoodDeliveryService } from '../food-delivery.service';
import { Restaurents } from '../models/restaurent.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  loginUser$ = this.foodDeliveryService.loginUser$;
  restauents$: Observable<Restaurents[]> | undefined;

  constructor(
    private foodDeliveryService: FoodDeliveryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.restauents$ = this.foodDeliveryService.getRestaurents();
    // this.restauents$.subscribe((res) => console.log(res));
    // .pipe(
    //   tap(res=>console.log(res)))
  }

  logout() {
    this.router.navigate(['/login']);
  }
  findMenu() {
    this.router.navigate(['/menu']);
  }
}
