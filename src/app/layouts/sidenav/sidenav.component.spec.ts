import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SidenavComponent } from "./sidenav.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { LoadingService, AuthService } from "../../core";
import { SharedModule } from "src/app/shared/shared.module";
import { of } from "rxjs";

describe("SidenavComponent", () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavComponent],
      imports: [HttpClientTestingModule, SharedModule],
      providers: [
        LoadingService,
        {
          provide: AuthService,
          useValue: { currentUser: of({}) }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should subscribe to authService on initialization and set loggedIn to true", () => {
    fixture.detectChanges();
    expect(fixture.componentInstance.isLoggedIn).toBeTrue();
  });
  it("should unsubscribe to authService.currentUser", () => {
    spyOn(fixture.componentInstance.destroyed$, "complete");
    fixture.componentInstance.ngOnDestroy();
    expect(fixture.componentInstance.destroyed$.complete).toHaveBeenCalled();
  });
});
