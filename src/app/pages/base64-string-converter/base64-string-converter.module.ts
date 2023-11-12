import {NgModule} from "@angular/core";
import {Base64StringConverterRoutingModule} from "./base64-string-converter-routing.module";
import {Base64StringConverterComponent} from "./base64-string-converter.component";
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import {FormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";

@NgModule({
  imports: [Base64StringConverterRoutingModule, NzCodeEditorModule, FormsModule, NzButtonModule, NzInputModule, NzIconModule],
  declarations: [Base64StringConverterComponent],
  exports: [Base64StringConverterComponent]
})
export class Base64StringConverterModule { }
