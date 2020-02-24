import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiService } from "../api/api.service";
import { User } from "@main/app/boiler/shared";
@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(public api: ApiService) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  public isAuthenticated(): boolean {
    // const token = localStorage.getItem('token');
    const token = localStorage.getItem("token");
    // Check whether the token is expired and return
    // true or false
    // return !this.jwtHelper.isTokenExpired(token);
    return this.checkToken(token);
  }
  public checkToken(token: string): boolean {
    if (token) {
      return true;
    }
    return false;
  }
  login(username: string, password: string): Observable<User> {
    return this.api.getUser(username, password).pipe(
      map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          console.log("token will be added");
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      })
    );
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
