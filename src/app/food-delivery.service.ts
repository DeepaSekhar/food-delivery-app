import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Latlong } from './models/latlong.interface'
import { HttpClient } from '@angular/common/http';
import { Restaurents } from './models/restaurent.interface'

@Injectable({
  providedIn: 'root'
})
export class FoodDeliveryService {
  restauents$: Observable<Restaurents[]> | undefined

  url: string = "http://localhost:3000/restaurents"
  constructor(private http: HttpClient) { }

  getRestaurents(): Observable<Restaurents[]> {
    this.restauents$ = this.http.get<Restaurents[]>(this.url);
    console.log(this.restauents$)
    return this.restauents$
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


}
