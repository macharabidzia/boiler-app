import { Component, OnInit, EventEmitter, OnChanges } from "@angular/core";
import { TranslateService } from '../../core';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  changeLanguageValue: EventEmitter<any> = new EventEmitter();
  languages: string[] = [];
  constructor(private translateService:TranslateService) {}
  
  ngOnInit(): void {
    // this.setLanguages();
  }

  // setLanguages() {
  //   // this.languages = [...this.translate.getLangs()];
  // }
  // changeLanguage(lang: string) {
  //   // this.translate.use(lang);
  // }
}
