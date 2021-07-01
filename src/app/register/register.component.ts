import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodDeliveryService } from '../food-delivery.service';
import { Customer } from "../models/customer.interface"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  customer: Observable<Customer> | undefined
  newCustomer: Partial<Customer> | undefined
  id: number | undefined;
  firstname: string | undefined;
  lastname: string | undefined;
  username: string | undefined;
  password: string | undefined;
  userId: number | undefined



  constructor(private foodDeliveryService: FoodDeliveryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  //post an user
  userRegister() {

    this.newCustomer = {

      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      password: this.password,
    }
    console.log("new customer", this.newCustomer);
    this.foodDeliveryService.postCustomers(this.newCustomer).subscribe(res => {
      console.log("response from subscription", res);
    })

  }
}
