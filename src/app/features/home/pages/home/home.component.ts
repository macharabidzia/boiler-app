import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, ReplaySubject } from "rxjs";
import { first, takeUntil } from "rxjs/operators";

import { AuthService } from "src/app/core/services/auth/auth.service";
import { User } from "@main/app/boiler/shared";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  public destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private authenticationService: AuthService) {
    this.authenticationService.currentUser
      .pipe(takeUntil(this.destroyed$))
      .subscribe(user => {
        this.currentUser = user;
      });
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.authenticationService
      .deleteUser(id)
      .pipe(first())
      .subscribe(() => {
        this.loadAllUsers();
      });
  }

  private loadAllUsers() {
    this.authenticationService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
      });
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
