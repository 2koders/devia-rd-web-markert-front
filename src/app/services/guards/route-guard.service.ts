import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from 'src/app/interfaces/users';
import { Models } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  model: Models;
  user: Users;

  constructor() {
    this.model = new Models();
    this.user = this.model.users.find(u => u.id.toString() == localStorage.getItem("user"));

    if (this.user != null || this.user != undefined) {
      this.user.isLoged = true;
    }    
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {    
    let user = this.user;
    if (user != null || user != undefined) {
      if(user.userPermits.userPermits == "Admin"){
        return true;
      }
    }
    return false;
  }
}
