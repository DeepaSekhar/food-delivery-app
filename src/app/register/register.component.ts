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
    // this.route.paramMap.subscribe(parameterMap => {
    //   this.userId = +parameterMap.get('id');
    // })
  }


  //post an user
  userRegister() {

    this.newCustomer = {

      firstname: this.firstname,
      lastname: this.lastname,
      username: this.lastname,
      password: this.password
    }



    this.foodDeliveryService.postCustomers(this.newCustomer)

  }
}
