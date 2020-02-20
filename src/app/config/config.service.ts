import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";
import { Config } from "./config.model";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  private config$: Observable<Config>;

  constructor(private http: HttpClient) {}

  public getConfig(): Observable<Config> {
    return this.init();
  }

  public init(): Observable<Config> {
    if (!this.config$) {
      this.config$ = this.http
        .get<Config>("/assets/config.json")
        .pipe(shareReplay(1));
    }
    return this.config$;
  }
}
