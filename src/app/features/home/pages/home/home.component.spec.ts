import { ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HomeModule } from "../../home.module";
import { LoadingService, AuthService } from "@main/app/boiler/core";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockAuthService: AuthService;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj(["getAll"]);
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HomeModule, HttpClientTestingModule],
      providers: [
        LoadingService,
        { provide: AuthService, useValue: mockAuthService }
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it("should create", fakeAsync(() => {
  //   // mockAuthService.expect(HomeComponent).toBeTruthy();
  // }));
});
