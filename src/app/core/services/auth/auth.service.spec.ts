import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { ApiService } from "../api/api.service";
import { Observable, of } from "rxjs";
import { LoadingService } from "../loading/loading.service";
import { CoreModule } from "../../core.module";
import { AuthService } from "./auth.service";
describe("AuthService", () => {
  let mockApiService: any;
  let httpTestingController: HttpTestingController;
  let service: AuthService;
  let resultUrl = "api/heroes";
  beforeEach(() => {
    mockApiService = jasmine.createSpyObj(["getUser"]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CoreModule],
      providers: [
        AuthService,
        LoadingService,
        { provide: ApiService, useValue: mockApiService }
      ]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(AuthService);
  });
  describe("login", () => {
    it("should call get with the correct URL", () => {
      // mockApiService.getUser.and.returnValue(
      //   of({
      //     id: 1,
      //     username: "machara",
      //     firstName: "giorgi",
      //     lastName: "matcharashvili",
      //     token: "fake-jwt-token"
      //   })
      // );
      // service.login("machara", "1234567").subscribe(() => {
      //   console.log("fullfiled");
      // });
      // // service.getHero(3).subscribe(() => {
      // //   console.log("fullfiled");
      // // });
      // const req = httpTestingController.expectOne("users/authenticate");
      // req.flush(
      //   of({
      //     id: 1,
      //     username: "machara",
      //     firstName: "giorgi",
      //     lastName: "matcharashvili",
      //     token: "fake-jwt-token"
      //   })
      // );
      // httpTestingController.verify();
    });
  });
});
