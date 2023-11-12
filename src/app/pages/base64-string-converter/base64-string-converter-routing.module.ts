import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {Base64StringConverterComponent} from "./base64-string-converter.component";

const routes: Routes = [
  { path: '', component: Base64StringConverterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Base64StringConverterRoutingModule { }
