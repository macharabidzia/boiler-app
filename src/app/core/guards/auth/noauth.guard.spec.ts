import { TestBed, async, inject } from "@angular/core/testing";

import { NoauthGuard } from "./noauth.guard";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { LoadingService } from "../../services";
import { Router } from '@angular/router';

describe("NoauthGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoauthGuard, LoadingService,Router],
      imports: [HttpClientTestingModule]
    });
  });

  // it("should ...", inject([NoauthGuard], (guard: NoauthGuard) => {
  //   expect(guard).toBeTruthy();
  // }));
});
