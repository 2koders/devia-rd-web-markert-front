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

  constructor(public userSv: UsersService) {  }

  ngOnInit(): void {
    this.userSv.getAllUsers().subscribe(data => {
      this.users = data;

      this.user = this.users.find(u => u.isLoged == true);
    })
  }

  authLogOut(){
    if (this.user) {
      //Our user getout :'( 
      this.user.isLoged = false;

      //Cleaning our variable "user" in the localStorage.
      this.userSv.updateThisUser(this.user).subscribe(data => {
        console.log(data);
      });

      console.log("Logout completed!");
    } else {
      console.log("Anyone is logged");
    }
  }
}