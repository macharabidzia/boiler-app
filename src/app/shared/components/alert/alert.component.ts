import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  message;
  constructor() {}

  ngOnInit(): void {
    this.message = null;
  }
}
