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
import { User } from "src/app/shared/models";
describe("AuthService", () => {
  let httpTestingController: HttpTestingController;
  let mockAuthservice: jasmine.SpyObj<AuthService>;
  beforeEach(() => {
    const authSpy = jasmine.createSpyObj("AuthService", ["login", "logout"]);
    const apiSpy = jasmine.createSpyObj("ApiService", ["getUser"]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CoreModule],
      providers: [
        AuthService,
        LoadingService,
        { provide: AuthService, useValue: authSpy },
        { provide: ApiService, useValue: apiSpy }
      ]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    mockAuthservice = TestBed.get(AuthService);
  });
  it("should return user on log in", () => {
    let user: User = {
      firstName: "giorgi",
      id: 1,
      lastName: "Matcharashvili",
      username: "macharabidzia",
      token: "auth-token"
    };
    mockAuthservice.login.and.returnValue(of(user));
    mockAuthservice.login("machara", "1235467").subscribe(val => {
      expect(val).toBe(user);
    });
  });
  it("should log out user", () => {
    spyOn(localStorage, "removeItem");
    mockAuthservice.logout();
    expect(localStorage.removeItem).toHaveBeenCalled();
  });
});
