import {NgModule} from "@angular/core";
import {JsonFormatterRoutingModule} from "./json-formatter-routing.module";
import {JsonFormatterComponent} from "./json-formatter.component";
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import {FormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";

@NgModule({
  imports: [JsonFormatterRoutingModule, NzCodeEditorModule, FormsModule, NzButtonModule],
  declarations: [JsonFormatterComponent],
  exports: [JsonFormatterComponent]
})
export class JsonFormatterModule { }
