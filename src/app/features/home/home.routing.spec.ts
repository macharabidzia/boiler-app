import {
  TestBed,
  tick,
  discardPeriodicTasks,
  fakeAsync
} from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HomeComponent } from "./pages/home/home.component";
import { routes } from "./home.routing";

describe("HomeRouting", () => {
  let location: Location;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // BrowserAnimationsModule,
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule
      ],
      declarations: [HomeComponent],
      providers: [Location]
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  });
  describe("HomeRoute", () => {
    it("should navigate to home", fakeAsync(() => {
      router.navigateByUrl("");
      tick();
      expect(location.path()).toBe("");
      discardPeriodicTasks();
    }));
  });
});
