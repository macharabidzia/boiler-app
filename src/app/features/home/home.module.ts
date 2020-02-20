import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home.routing";
import { HomeService } from "./service/home.service";
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
  providers: [HomeService]
})
export class HomeModule {}
