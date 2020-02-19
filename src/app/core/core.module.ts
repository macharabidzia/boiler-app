import { NgModule, ErrorHandler } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { AlertService } from "./services/alert/alert.service";
import { UserService } from "./services/user/user.service";
import { AuthGuard } from "./guards/auth/auth.guard";
import { AuthenticationService } from "./services/auth/auth.service";
import { ErrorInterceptor } from "./interceptors/error/error.interceptor";

@NgModule({
  imports: [HttpClientModule]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AlertService,
        UserService,
        AuthGuard,
        AuthenticationService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true
        }
      ]
    };
  }
}
