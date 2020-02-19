import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AuthenticationService } from "./access/auth/service/auth.service";
import { Router } from "@angular/router";
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
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang("en");
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : "en");
  }
  ngDoCheck() {
    console.log("trigger");
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["auth/login"]);
  }
}
