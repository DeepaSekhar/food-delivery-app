import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;


  constructor() { }

  ngOnInit() {

  }

  loginUser() {
    if (this.username == "Deepa" && this.password == "1234") {
      console.log("user login")
    }
    else {
      console.log("user unauthorised")
    }

  }
}



