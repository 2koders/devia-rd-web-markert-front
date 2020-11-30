import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { Models } from 'src/app/models/models';

@Component({
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.scss']
})
export class MainAdminComponent implements OnInit {

  model: Models;
  user: Users;
  isAnUserLogged: boolean;

  constructor() {
    this.model = new Models();
    this.user = this.model.users.find(u => u.id.toString() == localStorage.getItem("user"));

    this.isAnUserLogged = this.user != null || this.user != undefined ? true : false;
    
    console.log("Is an User Logged?: " + this.isAnUserLogged);

    if (this.isAnUserLogged) {
      console.log(`The user (${this.user.name} ${this.user.lastName}) is logged!`);
    }
  }

  ngOnInit(): void {
  }


}
