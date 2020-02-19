import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { ErrorInterceptor } from "../core/interceptors/error/error.interceptor";
import { AuthGuard } from "./auth/guards/auth.guard";
import { AuthenticationService } from "./auth/service/auth.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthGuard,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class AccessModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AccessModule,
      providers: [AuthGuard, AuthenticationService]
    };
  }
}
