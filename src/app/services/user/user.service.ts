import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {UserInterface} from "./user.interface";
import {HttpClient} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly path = `${environment.url}/users`;

  private users!: UserInterface[];

  constructor(private http: HttpClient) { }

  private getInitUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.path).pipe(tap((res) => this.users = [...res]));
  }

  getUsers(): Observable<UserInterface[]> {
    return this.users ? of(this.users) : this.getInitUsers();
  }
}
