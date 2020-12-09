import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})

export class SingInComponent implements OnInit {
  user: Users;
  users: Users[];
  password: string;
  email: string;
  userFound: boolean;

  constructor(private router : Router, public userSv : UsersService) {
    this.password = "";
    this.email = "";
  }

  ngOnInit(): void {
    this.userSv.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });      
  }

  handleLoginClick(){
    //This variable tells me if an user has these credentials. Returns true or false.
    this.userFound = this.users.includes(this.users.find(u => u.password == this.password && u.email == this.email));
    
    if (this.userFound) {
      //Now we have our user!
      this.user = this.users.find(a => a.email == this.email && a.password == this.password);

      //We mark it as logged in to know that you are logged in.
      this.user.isLoged = true;

      console.log(this.user);      

      this.authenticateUser(this.user);
    }
  }

  authenticateUser(u: Users){
    this.userSv.updateThisUser(u);
    if(u.userPermits.userPermits == "Admin"){
      this.router.navigate(['/admin']);
    } else { 
      this.router.navigate(['/']);
    }
  }
}
