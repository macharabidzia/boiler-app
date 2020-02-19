import { Routes, RouterModule } from "@angular/router";
import { AuthModule } from "./features/auth/auth.module";
import { HomeModule } from "./features/home/home.module";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./core/guards/auth/auth.guard";
import { NoauthGuard } from "./core/guards/auth/noauth.guard";
export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    pathMatch: "full",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./features/home/home.module").then(mod => mod.HomeModule)
  },
  {
    path: "auth",
    canActivate: [NoauthGuard],
    loadChildren: () =>
      import("./features/auth/auth.module").then(mod => mod.AuthModule)
  },
  { path: "**", redirectTo: "/auth/login" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
