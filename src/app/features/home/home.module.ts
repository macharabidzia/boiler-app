import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home.routing";
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
