import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  // this service manages dom interaction changes between home pages
  // for example if home -> home -> button is clicked and user goes to home -> anotherHomePage than certain banner will appear and that sort of interactions.
  constructor() {}
}
