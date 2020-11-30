import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { Models } from 'src/app/models/models';

@Component({
  templateUrl: './main-auth.component.html',
  styleUrls: ['./main-auth.component.scss']
})
export class MainAuthComponent implements OnInit {

  model: Models;
  user: Users;
  isAnUserLogged: boolean;

  constructor() { 
    this.model = new Models();
    this.user = this.model.users.find(u => u.id.toString() == localStorage.getItem("user"));
    this.isAnUserLogged = this.model.users.includes(this.model.users.find(u => u.id.toString() == localStorage.getItem("user")));
  }

  ngOnInit(): void {
  }

  authLogOut(){
    if (this.isAnUserLogged) {
      //Our user getout :'( 
      this.model.users.find(u => u.id.toString() == localStorage.getItem("user")).isLoged = false;

      //Cleaning our variable "user" in the localStorage.
      localStorage.removeItem("user");
      
      //Reset our "isAnUserLogged" variable.
      this.isAnUserLogged = false;

      console.log("Logout completed!");
    } else {
      console.log("Anyone is logged");
    }
  }
}