import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, of, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Latlong } from './models/latlong.interface';
import { HttpClient } from '@angular/common/http';
import { Restaurents } from './models/restaurent.interface';
import { Customer } from './models/customer.interface';
import { Login } from './models/login.interface';
import { filter, take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class FoodDeliveryService {
  restauents$: Observable<Restaurents[]> | undefined;
  newcustomer: Customer | undefined;
  authUser: Customer | undefined;
  //subject
  loginUser$: Observable<String | null>;
  private LoginUserSubject = new BehaviorSubject<String | null>(null);
  private RestaurentById = new ReplaySubject<Restaurents>(1);

  url: string = 'http://localhost:3000/restaurents';
  customerUrl: string = 'http://localhost:3000/customers';
  constructor(private http: HttpClient, private router: Router) {
    this.loginUser$ = this.LoginUserSubject.asObservable();
    // .pipe(
    //   tap((res) => console.log('Username from subject', res))
    // );
    // this.loginUser$.subscribe();
  }

  getRestaurents(): Observable<Restaurents[]> {
    this.restauents$ = this.http.get<Restaurents[]>(this.url);
    console.log(this.restauents$);
    return this.restauents$;
  }

  getCustomers(): Observable<any> {
    return this.http.get(this.customerUrl);
  }
  postCustomers(newcustomer: Partial<Customer>): Observable<Customer> {
    console.log('posting before');
    return this.http
      .post<Customer>(this.customerUrl, newcustomer)
      .pipe(tap(() => this.router.navigate(['/login'])));
  }

  loginAuthentication(loginUser: Login): void {
    console.log('login aunthentication service', loginUser);
    //multicasting observable(sending value to the component)

    this.http
      .get<Customer[]>(`${this.customerUrl}?username=${loginUser.username}`)
      .pipe(
        take(1),
        tap((res) => {
          if (res[0] === undefined) {
            console.log('user not found');
          } else if (res[0].password === loginUser.password) {
            console.log('successfully login');
            this.LoginUserSubject.next(loginUser.username);
            this.router.navigate(['/landing']);
          } else {
            console.log('password is incorrect');
          }
        })
      )
      .subscribe();
  }

  getRestaurentById(id: number): void {
    console.log('id from the menu component', id);

    this.restauents$
      ?.pipe(
        tap((rests: Restaurents[]) => {
          const filteredRest = rests.filter(
            (restaurent) => restaurent.id === id
          )[0];
          this.RestaurentById.next(filteredRest);
        })
      )
      .subscribe();
  }
  // getMenuById(id: number): Observable<Restaurents> {

  // }

  //validating the user

  // getUsersLoccation(): Observable<Latlong> {

  //   return navigator.geolocation.getCurrentPosition(res => {
  //     const lat = res.coords.latitude;
  //     const lng = res.coords.longitude;
  //     console.log("geo loccation after", res);
  //     console.log("latlong", { lat, lng });
  //     return of({ lat, lng })
  //   }) as unknown as Observable<Latlong>

  //
}
