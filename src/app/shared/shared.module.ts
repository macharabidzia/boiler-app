import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslatePipe } from "./pipes/translate/translate.pipe";
import { AlertComponent } from "./components";

@NgModule({
  declarations: [TranslatePipe, AlertComponent],
  exports: [TranslatePipe, AlertComponent],
  imports: [CommonModule]
})
export class SharedModule {}
