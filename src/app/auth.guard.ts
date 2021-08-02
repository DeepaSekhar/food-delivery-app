import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FoodDeliveryService } from './food-delivery.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private foodDeliveryService: FoodDeliveryService,
    private route: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.foodDeliveryService.loginUser$.pipe(
      map((loggedIn) => (loggedIn ? true : this.route.parseUrl('/login')))
    );
  }
}
