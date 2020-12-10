import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class UsersService {
  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${environment.apiUrl}/users/`);
  }

  getThisUser(user: Users){
    return this.httpClient.get(`${environment.apiUrl}/users/${user.id}`);
  }

  createNewUser(user: Users): Observable<Users>{
    return this.httpClient.post<Users>(`${environment.apiUrl}/users/`, user);
  }

  updateThisUser(user: Users): Observable<Users>{
    return this.httpClient.put<Users>(`${environment.apiUrl}/users/${user.id}`, user);
  }

  deleteThisUser(user: Users): Observable<Users>{
    return this.httpClient.delete<Users>(`${environment.apiUrl}/users/${user.id}`);
  }
}