import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../../services";
@Injectable({
  providedIn: "root"
})
export class NoauthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(["user/profile"]);
      return false;
    }
    return true;
  }
}
