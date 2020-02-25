import {
  TestBed,
  fakeAsync,
  tick,
  discardPeriodicTasks,
  inject,
  ComponentFixture
} from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./features/auth/auth.module";
import { AppComponent } from "./app.component";
import { Router, RouterModule } from "@angular/router";
import { NgModuleFactoryLoader } from "@angular/core";
import { Location } from "@angular/common";
import { HomeModule } from "./features/home/home.module";
import { routes } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule, AuthGuard, NoauthGuard, LoadingService } from "./core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { browser } from "protractor";

describe("AppRouting", () => {
  let location: Location;
  let router: Router;
  let mockLoadingService;
  let mockAuthService;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    mockLoadingService = jasmine.createSpyObj(["back"]);
    mockAuthService = jasmine.createSpyObj(["back"]);
    TestBed.configureTestingModule({
      imports: [
        // BrowserAnimationsModule,
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule
      ],
      declarations: [AppComponent],
      providers: [
        Location,
        {
          provide: LoadingService,
          useValue: mockLoadingService
        }
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  });
  describe("HomeRoute", () => {
    it("should activate guard when user tries to access home and if logged in it will pass", fakeAsync(
      inject([AuthGuard], (guard: AuthGuard) => {
        const spy = spyOn(guard, "canActivate").and.returnValue(true);
        const loader = TestBed.get(NgModuleFactoryLoader);
        loader.stubbedModules = { lazyModule: HomeModule };
        router.resetConfig([{ path: "home", loadChildren: "lazyModule" }]);
        router.navigate(["home"]);
        tick();
        expect(spy).toHaveBeenCalled(); // put expect here, AFTER navigate is resolved
        expect(location.path()).toBe("/home");
        discardPeriodicTasks();
      })
    ));
  });
  describe("AuthRoute", () => {
    it("should navigate to /auth ", fakeAsync(() => {
      const loader = TestBed.get(NgModuleFactoryLoader);
      loader.stubbedModules = { lazyModule: AuthModule };
      router.resetConfig([{ path: "auth", loadChildren: "lazyModule" }]);
      router.navigate(["auth"]);
      tick();
      expect(location.path()).toBe("/auth");
    }));
  });
  describe("initialRoute", () => {
    it("should redirect to home which than redirects to auth/login when no auth user ", fakeAsync(() => {
      router.navigate([""]).then();
      tick();
      expect(location.path()).toBe("/auth/login");
    }));
  });
});
