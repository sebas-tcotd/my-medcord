import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Login, LoginResponse } from '../interfaces/login.interface';
import { UserResponse } from '../interfaces/user-response.interface';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url: string = environment.URL_BACKEND;

  constructor(private http: HttpClient) {}

  public login(body: Login): Observable<LoginResponse> {
    const endpoint = `${this.url}/users/login`;

    return this.http.post<LoginResponse>(endpoint, body);
  }

  public addUserToRegistry(body: User): Observable<UserResponse> {
    const endpoint = `${this.url}/users/register`;

    return this.http.post<UserResponse>(endpoint, body);
  }
}
