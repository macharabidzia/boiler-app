import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./core/services/auth/auth.service";
import { TranslateService } from './core/services/translate/translate.service';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "boiler-app";
  constructor(
    public translate: TranslateService,
    public authService: AuthenticationService,
    public router: Router
  ) {
    console.log(translate.currentLang);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["auth/login"]);
  }
}
