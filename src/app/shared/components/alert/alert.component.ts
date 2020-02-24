import { Component, OnInit } from "@angular/core";
import { AlertService } from "src/app/core/services";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  message;
  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.success('hey');
    this.message = null;
  }
}
