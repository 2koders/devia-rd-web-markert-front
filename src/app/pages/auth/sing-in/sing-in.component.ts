import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { Models } from 'src/app/models/models';

@Component({
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})

export class SingInComponent implements OnInit {
    
  model: Models;
  user: Users;
  password: string;
  email: string;
  userFound: boolean;

  constructor(private router : Router) {
    this.model = new Models();
    this.password = "";
    this.email = "";
  }

  ngOnInit(): void {
  }

  handleLoginClick(){
    //This variable tells me if a user has these credentials. Returns true or false.
    this.userFound = this.model.users.includes(this.model.users.find(u => u.password == this.password && u.email == this.email));
    
    if (this.userFound) {
      //Now we have our user!
      this.user = this.model.users.find(a => a.email == this.email && a.password == this.password);

      //We mark it as logged in to know that you are logged in.
      this.user.isLoged = true;

      this.authenticateUser(this.user);
    }
    
    console.log("Login: " + this.userFound);
  }

  authenticateUser(u: Users){
    if(u.userPermits.userPermits == "Admin"){
      this.router.navigate(['/admin']);
    } else if(u.userPermits.userPermits == "Client"){ 
      this.router.navigate(['/']);
    }
  }
}
