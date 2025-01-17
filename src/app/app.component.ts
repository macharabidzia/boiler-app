import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./core/services/auth/auth.service";
import { TranslateService } from "./core/services/translate/translate.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "boiler-app";
  constructor(
    public translate: TranslateService,
    public authService: AuthService,
    public router: Router
  ) {}
}
