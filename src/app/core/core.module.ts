import {
  NgModule,
  ErrorHandler,
  APP_INITIALIZER,
  Optional,
  SkipSelf
} from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { AuthGuard } from "./guards";
import { ErrorInterceptor, JwtInterceptor } from "./interceptors";
import { throwIfAlreadyLoaded } from "./module-import-guard";
import {
  LoadingService,
  AlertService,
  UserService,
  AuthenticationService,
  ApiService,
  ApiServiceBase,
  BaseUrlProviderService,
  TranslateService
} from "./services";
import { fakeBackendProvider } from "./helpers";
export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use("en");
}

@NgModule({
  imports: [HttpClientModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        LoadingService,
        AlertService,
        UserService,
        ApiService,
        TranslateService,
        {
          provide: APP_INITIALIZER,
          useFactory: setupTranslateFactory,
          deps: [TranslateService],
          multi: true
        },
        ApiServiceBase,
        BaseUrlProviderService,
        AuthGuard,
        AuthenticationService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true
        },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
      ]
    };
  }
}
