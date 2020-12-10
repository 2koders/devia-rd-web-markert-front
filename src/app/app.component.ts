import { Component, OnInit } from '@angular/core';
import { Users } from './interfaces/users';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'devia-rd-web-markert-front';
  
  users: Users[];
  user: Users;
  isAnUserLogged: boolean;

  constructor(public userSv: UsersService){
    this.isAnUserLogged = false;
  }

  ngOnInit(): void {
    this.userSv.getAllUsers().subscribe(data => {
      console.log(data);

      this.users = data;
      console.log(this.users);
      
      //Geting the user logged saved in the browser, if is an user logged of course.
      this.user = this.users.find(u => u.isLoged == true);
      console.log(this.user);

      //If we found an user we will make the "isAnUserLogged" variable true. That means we have an user logged.
      if (this.user != null || this.user != undefined) {
        this.isAnUserLogged = true;
      }else{
        this.isAnUserLogged = false;
      }
    });
  }
}
