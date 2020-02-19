import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { AppComponent } from "./app.component";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AlertComponent } from "./core/components/alert/alert.component";
import { JwtInterceptor } from "./core/interceptors/auth/jwt.interceptor";
import { fakeBackendProvider } from "./core/helpers/fake-backend";
import { AppRoutingModule } from "./app.routing";
import { CommonModule } from "@angular/common";
import { AccessModule } from "./access/access.module";
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    AccessModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
