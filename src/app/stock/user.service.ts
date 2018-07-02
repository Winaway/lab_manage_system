import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  constructor(public http: Http) {
  }


  getUsers(): Observable<User[]> {
    return this.http.get('/api/users/queryAll').map(res => res.json());
  }

  getUser(id: number): Observable<User> {
    return this.http.get('/api/users/query?id=' + id).map(res => res.json());
  }

  addUser(value): Observable<any> {
    return this.http.post('/api/users/addUser', value).map(res => res.json());
  }

  updateUser(value, id): Observable<any> {
    return this.http.post('/api/users/updateUser?id=' + id, value).map(res => res.json());
  }

  login(value): Observable<any> {
    return this.http.post('/api/users/login', value).map(res => res.json());
  }
}

export class User {
  constructor(
              public user_id: number,
              public name: string,
              public limits: number,
              public department: string,
              public password: string) {

  }

}
