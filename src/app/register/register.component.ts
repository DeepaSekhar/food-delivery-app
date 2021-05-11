import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstname: string | undefined;
  lastname: string | undefined;
  username: string | undefined;
  password: string | undefined;




  constructor() { }


  ngOnInit(): void {
  }
  userRegister() {
    console.log("register");
  }
}
