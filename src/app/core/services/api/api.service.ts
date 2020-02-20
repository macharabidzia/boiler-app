import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiServiceBase } from "./api.service.base";
import { User } from "../../models";

@Injectable({
  providedIn: "root"
})
export class ApiService extends ApiServiceBase {
  //   getUser(): Observable<User> {
  //     return this.get<User>(`user`);
  //   }
  getUser(username: string, password: string): Observable<User> {
    return this.http.post<any>(`/users/authenticate`, { username, password });
  }
}
