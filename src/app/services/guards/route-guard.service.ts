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
  
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    this.user = this.model.users.find(u => u.isLoged);
    
    let user = this.user;

    if(user.userPermits.userPermits == 'Admin'){
      return true;
    }
    return false;
  }
}
