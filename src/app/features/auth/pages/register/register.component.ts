import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { AlertService } from "src/app/core/services/alert/alert.service";
import { AuthService } from "src/app/core/services/auth/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        () => {
          this.alertService.success("Registration successful", true);
          this.router.navigate(["/login"]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
