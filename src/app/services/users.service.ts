import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private httpClient: HttpClient) { }

  getThisUser(user: Users){
    return this.httpClient.get(`api/users/${user.id}`);
  }

  createNewUser(user: Users){
    this.httpClient.post('api/users/', user);
  }

  updateThisUser(user: Users){
    this.httpClient.put(`api/users/${user.id}`, user);
  }

  deleteThisUser(user: Users){
    this.httpClient.delete(`api/users/${user.id}`);
  }
}