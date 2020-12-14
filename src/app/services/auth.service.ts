import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  
  constructor(private httpClient: HttpClient) { }

  SingIn(user: Users): Observable<Users>{
    user.isLoged = true;
    return this.httpClient.put<Users>(`${environment.apiUrl}/users/${user.id}`, user);
  }

  SingUp(user: Users): Observable<Users>{
    return this.httpClient.post<Users>(`${environment.apiUrl}/users/`, user);
  }

  SingOut(user: Users): Observable<Users>{
    user.isLoged = false;
    return this.httpClient.put<Users>(`${environment.apiUrl}/users/${user.id}`, user);
  }
}