// User Service
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class OnlyLoggedInUserGaurd implements CanActivate {

  constructor(private userService: UserService) {};

  canActivate(){
    //console.log("Only Logged in user gaurd.");
    if (this.userService.isLoggedIn()){
      return true;
    }else {
      window.alert("You don't have permission to view this page.");
      return false;
    }
  }
}
