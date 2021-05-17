import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodDeliveryService } from '../food-delivery.service';
import { Login } from "../models/login.interface"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;
  login: Login | undefined

  constructor(private foodDeliveryService: FoodDeliveryService) { }
  ngOnInit() {

  }

  loginUser() {
    this.login = {

      username: this.username as string,
      password: this.password as string,
    }
    console.log("login details", this.login);
    this.foodDeliveryService.loginAuthentication(this.login)

  }

}
