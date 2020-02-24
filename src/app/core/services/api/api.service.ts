import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiServiceBase } from "./api.service.base";
import { User } from "@main/app/boiler/shared";

@Injectable({
  providedIn: "root"
})
export class ApiService extends ApiServiceBase {
  getUser(username: string, password: string): Observable<User> {
    return this.post<any>(`/users/authenticate`, { username, password });
  }
  getAll() {
    return this.get<User[]>(`/users`);
  }

  register(user: User): Observable<User> {
    return this.post<User>(`/users/register`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.delete(`/users/${id}`);
  }
}
