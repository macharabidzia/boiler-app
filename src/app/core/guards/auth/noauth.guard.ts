import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "../../services/auth/auth.service";
@Injectable({
  providedIn: "root"
})
export class NoauthGuard implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      console.log("CANT");
      this.router.navigate(["user/profile"]);
      return false;
    }
    return true;
  }
}
