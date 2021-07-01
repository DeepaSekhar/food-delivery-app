import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodDeliveryService } from '../food-delivery.service';
import { Customer } from "../models/customer.interface"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customers: Customer[] | undefined
  constructor(private router: Router,
    private foodDeliveryService: FoodDeliveryService) { }

  ngOnInit(): void {
    this.foodDeliveryService.getCustomers().subscribe(
      data => {
        this.customers = data;
        console.log("users", this.customers)
      }
    )
  }
  navigateTologin() {
    this.router.navigate(['/login'])
  }
  navigateToregister() {
    this.router.navigate(['/register'])
  }
}
