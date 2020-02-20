import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { FooterComponent } from "./footer/footer.component";
import { SharedModule } from "../shared/shared.module";
@NgModule({
  declarations: [HeaderComponent, SidenavComponent, FooterComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, SidenavComponent, FooterComponent]
})
export class LayoutsModule {}
