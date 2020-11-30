import { Component } from '@angular/core';
import { Users } from './interfaces/users';
import { Models } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devia-rd-web-markert-front';
  
  model: Models;
  user: Users;
  isAnUserLogged: boolean;

  constructor(){
    this.model = new Models();

    //Geting the user logged saved in the browser, if is an user logged of course.
    this.user = this.model.users.find(u => u.id.toString() == localStorage.getItem("user"));

    //If we found an user we will make the "isAnUserLogged" variable true. that means we have an user logged.
    if (this.user != null || this.user != undefined) {
      this.isAnUserLogged = true;
    }    
  }
}
