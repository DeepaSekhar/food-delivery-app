
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Observable } from 'rxjs';
import { FoodDeliveryService } from '../../app/food-delivery.service'
import { Latlong } from '../models/latlong.interface'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  private map: any;
  location$: Observable<Latlong> | undefined;
  // private location: Latlong | undefined
  constructor(private foodDeliveryService: FoodDeliveryService) { }
  ngOnInit() {
    // this.location$ = this.foodDeliveryService.getUsersLoccation();
    // console.log("location from service", this.location$)
  }


  ngAfterViewInit() {
    // this.location$.subscribe(res => {

    //   this.setView(res);
    // })
    // this.setView();
    this.getUsersLoccation();

  }
  getUsersLoccation() {
    return navigator.geolocation.getCurrentPosition(res => {
      const lat = res.coords.latitude;
      const lng = res.coords.longitude;
      console.log("location", lat, lng);
      this.map = L.map('map').setView([lat, lng], 13);
      this.getTile();

    })
  }
  // private setView(locaton): void {
  //   console.log("setview called");
  //   if (locaton === undefined) {
  //     console.warn("Location is undefined")
  //     return;
  //   }
  //   this.map = L.map('map').setView([locaton.longitude, locaton.longitude], 13);
  // }

  private getTile(): void {
    console.log("getTile called");
    const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVlcGFha2hpbCIsImEiOiJja2t5bHB1OGswNTlhMm9tbGpxOXZ2a3ZlIn0.zA63CvCd0amANa_njPEx3g', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'


    })

    tiles.addTo(this.map);

  }

}



