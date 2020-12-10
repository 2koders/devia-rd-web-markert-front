import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from 'src/app/interfaces/users';
import { Models } from 'src/app/models/models';
import { UsersService } from '../users.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
  user: Users;

  constructor(public userSv : UsersService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.userSv.getAllUsers().subscribe(users => {
      this.user = users.find(u => u.isLoged == true);
    });

    if (this.user.isLoged){
      return true;
    }

    return false;
  }
}
