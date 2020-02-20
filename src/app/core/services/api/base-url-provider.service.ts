import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ConfigService } from "@main/app/boiler/config";
@Injectable({
  providedIn: "root"
})
export class BaseUrlProviderService {
  constructor(private config: ConfigService) {}

  getBaseUrl(): Observable<string> {
    return this.config.getConfig().pipe(
      map(f => {
        return f.apiUrl;
      })
    );
  }
}
