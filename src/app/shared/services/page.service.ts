import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PageService {
  // this service will emit events in cases when pages need to talk to each other in rare cases
  constructor() {}
}
