import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iRegister } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  email: string;
  password: string;
  status: any = false;
  message: string;
  userArr: any[];
  checkUsername: string;
  checkEmail: string;

  constructor(private router: Router) { }

  ngOnInit() { }

  register(reg: any) {
    this.username = reg.username;
    this.email = reg.email;
    this.password = reg.password;

    let userObj = <iRegister>{};
    userObj.username = reg.username;
    userObj.email = reg.email;
    userObj.password = reg.password;
    this.status = true;
    this.status = setInterval(() => { this.status = false; }, 5000);


    if (typeof (Storage) !== "undefined") {


      let retrievedObject = localStorage.getItem('userObj');

      this.checkUsername = JSON.parse(retrievedObject).username;
      this.checkEmail = JSON.parse(retrievedObject).email;

      if (this.username == this.checkUsername) {
        this.message = "Username already exist.";
      } else if (this.email == this.checkEmail) {
        this.message = "Email ID already exist";
      } else {
        // Put the object into storage
        this.message = "You have successfully created Account.";
        localStorage.setItem('userObj', JSON.stringify(userObj));
        this.router.navigate(['/flight']);
      }
     // localStorage.removeItem('userObj');


    } else { alert("Sorry! No Web Storage support.."); }
  }



}
