import { Pipe, PipeTransform } from "@angular/core";
import { TranslateService } from "@main/app/boiler/core";
@Pipe({
  name: "translate",
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}
  transform(key: any): any {
    return this.translate.data[key] || key;
  }
}
