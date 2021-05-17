import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Latlong } from './models/latlong.interface'
import { HttpClient } from '@angular/common/http';
import { Restaurents } from './models/restaurent.interface'
import { Customer } from "./models/customer.interface"
import { Login } from './models/login.interface';
import { take, tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class FoodDeliveryService {
  restauents$: Observable<Restaurents[]> | undefined
  newcustomer: Customer | undefined
  authUser: Customer | undefined;
  url: string = "http://localhost:3000/restaurents"
  customerUrl: string = "http://localhost:3000/customers"
  constructor(private http: HttpClient) { }

  getRestaurents(): Observable<Restaurents[]> {
    this.restauents$ = this.http.get<Restaurents[]>(this.url);
    console.log(this.restauents$)
    return this.restauents$
  }

  getCustomers(): Observable<any> {
    return this.http.get(this.customerUrl);
  }
  postCustomers(newcustomer: Partial<Customer>): Observable<Customer> {
    // console.log("from service", newcustomer);
    return this.http.post<Customer>(this.customerUrl, newcustomer)
    // .pipe(
    //   tap(
    //     res => console.log("from function", res)

    //   ),
    //   take(1)
    // )
    //  .subscribe()
  }

  loginAuthentication(loginUser: Login) {
    console.log("login aunthentication service", loginUser)
    this.http.get<Customer[]>(`${this.customerUrl}?username=${loginUser.username}`)
      .subscribe(res => {
        console.log("loginauth", res)
        if (res[0] === undefined) {
          console.log("user not found");
        }
        else if (res[0].password === loginUser.password) {
          console.log("successfully login")
        }
        else {
          console.log("password is incorrect")
        }
      })


  }

}



  // getUsersLoccation(): Observable<Latlong> {

  //   return navigator.geolocation.getCurrentPosition(res => {
  //     const lat = res.coords.latitude;
  //     const lng = res.coords.longitude;
  //     console.log("geo loccation after", res);
  //     console.log("latlong", { lat, lng });
  //     return of({ lat, lng })
  //   }) as unknown as Observable<Latlong>

  // }



