import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class TranslateService {
  data: any = {};
  constructor(private http: HttpClient) {}
  currentLanguage$: string;
  get currentLang(): string {
    return this.currentLanguage$;
  }
  set currentLang(lan: string) {
    this.currentLanguage$ = lan;
  }
  use(lang: string): Promise<{}> {
    this.currentLang = lang;
    return new Promise<{}>((resolve, reject) => {
      const langPath = `assets/i18n/${lang || "en"}.json`;
      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
}
