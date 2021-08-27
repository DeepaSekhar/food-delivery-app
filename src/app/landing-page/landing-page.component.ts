import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restauents$ = this.foodDeliveryService.getRestaurents();
    // this.restauents$.subscribe((res) => console.log(res));
    // .pipe(
    //   tap(res=>console.log(res)))
    // this.route.paramMap.subscribe((parameterMap) => {
    // const menuId = +parameterMap.get('id')
    // console.log(menuId);
    // });
  }

  logout() {
    this.router.navigate(['/login']);
  }
  findMenu(id: number) {
    console.log('id from menu button', id);
    this.router.navigate(['/menu', id]);
  }
}
