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

  constructor(public userSv: UsersService){
  }

  ngOnInit(): void {
    this.userSv.getAllUsers().subscribe(data => {

      this.users = data;
      this.user = this.users.find(u => u.isLoged == true);
    });
  }
}
