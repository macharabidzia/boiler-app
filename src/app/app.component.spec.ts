import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app.routing";
import { LayoutsModule } from "./layouts/layouts.module";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        CoreModule.forRoot(),
        LayoutsModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  }));

  it("should create the app", () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'boiler-app'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual("boiler-app");
  });

  it("should render title", () => {
    const compiled = fixture.nativeElement;
  });
  it("should call log out serice", () => {
    // spyOn(fixture.componentInstance, "logout");
    // expect(fixture.componentInstance.logout).toHaveBeenCalled();
  });
});
