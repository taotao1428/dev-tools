import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UuidGeneratorComponent} from "./uuid-generator.component";

const routes: Routes = [
  { path: '', component: UuidGeneratorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UuidGeneratorRoutingModule { }
