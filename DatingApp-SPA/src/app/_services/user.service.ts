import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { MemberCardComponent } from '../members/member-card/member-card.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'user', httpOptions);
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'user/' + id, httpOptions);
  }

  updateUser(id: MemberCardComponent, user: User) {
    return this.http.put<User>(this.baseUrl + 'user/' + id, user);
  }
}
