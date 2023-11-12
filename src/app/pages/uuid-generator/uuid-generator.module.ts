import {NgModule} from "@angular/core";
import {UuidGeneratorRoutingModule} from "./uuid-generator-routing.module";
import {UuidGeneratorComponent} from "./uuid-generator.component";
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import {FormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSpaceModule} from "ng-zorro-antd/space";

@NgModule({
  imports: [UuidGeneratorRoutingModule, NzCodeEditorModule, FormsModule, NzButtonModule, NzInputNumberModule, NzInputModule, NzSpaceModule],
  declarations: [UuidGeneratorComponent],
  exports: [UuidGeneratorComponent]
})
export class UuidGeneratorModule { }
