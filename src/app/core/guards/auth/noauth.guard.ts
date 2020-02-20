import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "../../services";
@Injectable({
  providedIn: "root"
})
export class NoauthGuard implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(["user/profile"]);
      return false;
    }
    return true;
  }
}
