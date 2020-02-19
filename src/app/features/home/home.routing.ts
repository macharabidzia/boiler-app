import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "src/app/access/auth/guards/auth.guard";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
