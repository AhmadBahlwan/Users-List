import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, timeout } from 'rxjs/operators';

import { User } from './user.model';

@Injectable()
export class UsersService {
  private baseUrl = 'https://reqres.in/api/users';
  private usersCache: any[];
  private userCache: { [userId: number]: User } = {};

  userSelected = new EventEmitter<User>();

  constructor(private http: HttpClient) {
    this.usersCache = [];
  }

  getUsers(page: number): Observable<any> {
    if (this.usersCache && this.usersCache[page - 1]) {
      return of(this.usersCache[page - 1]);
    }

    const url = `${this.baseUrl}?page=${page}`;
    return this.http.get(url).pipe(
      map((response: any) => {
        this.usersCache[page - 1] = response;
        return response;
      }),
      timeout(5000),
      catchError((error) => {
        alert("Error fetching users list");
        console.log(error);
        return of(null);
      }),
    );
  }

  getUserById(userId: number): Observable<User> {
    if (this.userCache[userId]) {
      return of(this.userCache[userId]);
    }
    const url = `${this.baseUrl}/${userId}`;
    return this.http.get(url).pipe(
      map((response: any) => response.data),
      timeout(5000),
      tap(user => {
        this.userCache[userId] = user;
      }),
      catchError(error => {
        alert("Error fetching user details");
        console.error(error);
        return of(null);
      })
    );
  }
}
