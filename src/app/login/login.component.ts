import { Component, OnInit, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CanActivate, Router, ActivatedRoute} from '@angular/router';
import { Credential } from './credential'
import { AuthGuard } from './authGuard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit, CanActivate {

  requiresLogin: boolean = false;
  loading = false;
  returnUrl: string;

  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit() {
    // reset login status

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   }

   loginFun(details): void{
    this.loading = true;
    let email = 'ranjeetpatel10@gmail.com';
    let pass = 456;
    if ((details.email == email) && (details.password == pass)){
    //  console.log("successfully logged step 1 "+ this.requiresLogin);
      this.requiresLogin = true;
     // console.log("successfully logged step 2 "+ this.requiresLogin);
      this.router.navigate(['dashboard']);
    }else {
      console.log("not logged.");
    }
  }

  canActivate(){
    console.log("Login page success step 0 " +this.requiresLogin);
    return this.requiresLogin;
  }
}
