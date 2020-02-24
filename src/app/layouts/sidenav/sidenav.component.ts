import { Component, OnInit } from "@angular/core";
import { UserService, AuthenticationService } from "../../core";
import { ReplaySubject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {
  public isLoggedIn: boolean = false;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.authService.currentUser
      .pipe(takeUntil(this.destroyed$))
      .subscribe(user => {
        if (user) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      });
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
