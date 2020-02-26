import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../core";
import { ReplaySubject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {
  public isLoggedIn: boolean;
  public destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  constructor(private authService: AuthService) {}

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
