import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodDeliveryService } from '../food-delivery.service';
import { Users } from "../models/user.interface"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Users[] | undefined
  constructor(private router: Router,
    private foodDeliveryService: FoodDeliveryService) { }

  ngOnInit(): void {
    this.foodDeliveryService.getUsers().subscribe(
      data => {
        this.users = data;
        console.log("users", this.users)
      }
    )
  }


}
