import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  templateUrl: './main-auth.component.html',
  styleUrls: ['./main-auth.component.scss']
})
export class MainAuthComponent implements OnInit {
  users: Users[];
  user: Users;
  isAnUserLogged: boolean;

  constructor(public userSv: UsersService) { 
    
  }

  ngOnInit(): void {
    this.userSv.getAllUsers().subscribe(data => {
      this.users = data;

      this.user = this.users.find(u => u.isLoged == true);

      this.isAnUserLogged = this.users.includes(this.users.find(u => u.isLoged == true));
    })
  }

  authLogOut(){
    if (this.isAnUserLogged) {
      //Our user getout :'( 
      this.user.isLoged = false;

      //Cleaning our variable "user" in the localStorage.
      this.userSv.updateThisUser(this.user)
      
      //Reset our "isAnUserLogged" variable.
      this.isAnUserLogged = false;

      console.log("Logout completed!");
      console.log(this.user)
    } else {
      console.log("Anyone is logged");
    }
  }
}