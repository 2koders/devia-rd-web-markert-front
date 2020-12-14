import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: Users;

  constructor(private userSv: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id: string;
      id = params.get('userId');

      this.userSv.getThisUser(id).subscribe(user => {
        this.user = user;
      });
    });
  }

}
