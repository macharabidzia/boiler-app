import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SidenavComponent } from "./sidenav.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { LoadingService } from "../../core";
import { SharedModule } from "src/app/shared/shared.module";

describe("SidenavComponent", () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavComponent],
      imports: [HttpClientTestingModule, SharedModule],
      providers: [LoadingService]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
