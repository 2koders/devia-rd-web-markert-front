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
  @Input() isAnUserLogged: boolean;

  constructor(public userSv: UsersService) { }

  ngOnInit(): void {
  }

  authLogOut(){
    if (this.isAnUserLogged) {
      //Our user getout :'( 
      this.user.isLoged = false;

      this.userSv.updateThisUser(this.user)
      
      //Reset our "isAnUserLogged" variable.
      this.isAnUserLogged = false;

      console.log("Logout completed!");
    } 
  }
}
