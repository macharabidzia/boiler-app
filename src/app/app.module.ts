import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { CommonModule } from "@angular/common";
import { LayoutsModule } from "./layouts/layouts.module";
import {
  CoreModule,
  fakeBackendProvider,
  JwtInterceptor
} from "@main/app/boiler/core";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutsModule,
    CoreModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
