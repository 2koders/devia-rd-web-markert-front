import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() user: Users;

  constructor(public userSv: UsersService) {
  }

  ngOnInit(): void {
  }

  authLogOut(){
    if (this.user) {
      //Our user getout :'( 
      this.user.isLoged = false;

      this.userSv.updateThisUser(this.user);

      console.log("Logout completed!");
    } 
  }
}
