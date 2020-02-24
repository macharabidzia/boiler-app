import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { ApiService } from "../api/api.service";
import { TranslateService } from "./translate.service";
import { HttpClient } from "@angular/common/http";
describe("AuthService", () => {
  let mockApiService: ApiService;
  let httpTestingController: HttpTestingController;
  let service: TranslateService;
  let resultUrl = "api/heroes";
  beforeEach(() => {
    mockApiService = jasmine.createSpyObj(["add"]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TranslateService,
        { provide: ApiService, useValue: mockApiService }
      ]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(TranslateService);
  });
  describe("login", () => {
    // it("should call get with the correct URL", () => {
    //   service.login("machara", "1234567").subscribe(() => {
    //     console.log("fullfiled");
    //   });
    //   // service.getHero(3).subscribe(() => {
    //   //   console.log("fullfiled");
    //   // });
    //   const req = httpTestingController.expectOne("/users/authenticate");
    //   req.flush({
    //     id: 1,
    //     username: "machara",
    //     firstName: "giorgi",
    //     lastName: "matcharashvili",
    //     token: "fake-jwt-token"
    //   });
    //   httpTestingController.verify();
    // });
  });
});
