import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';
import { UserPermits } from "src/app/interfaces/user-permits";
import { Models } from 'src/app/models/models';

@Component({
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  users: Users[];
  user: Users;
  id: number;

  constructor(public userSv: UsersService) {
    this.user = {
      id: 0,
      name: "",
      lastName: "",
      isBussines: false,
      email:"",
      password: "",
      RNCOrIdCard:"",
      imgProfile: "",
      totalTimesLogged: 0,
      isLoged: false,
      userPermits: new Models().userPermits.find(uP => uP.id == 2)
    }
  }

  ngOnInit(): void {
    this.userSv.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }

  singUp(){
    let user: Users = {
      id : Number(this.users.length + 1),
      name: this.user.name,
      lastName: this.user.lastName,
      isBussines: this.user.isBussines,
      email: this.user.email,
      password: this.user.password,
      RNCOrIdCard: this.user.RNCOrIdCard,
      imgProfile: this.user.imgProfile,
      totalTimesLogged: 0,
      isLoged: false,
      userPermits: new Models().userPermits.find(uP => uP.id == 2)
    }

    this.userSv.createNewUser(user).subscribe(data => {
      console.log(data);
    })
  }

}
