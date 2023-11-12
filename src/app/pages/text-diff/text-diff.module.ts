import {NgModule} from "@angular/core";
import {TextDiffRoutingModule} from "./text-diff-routing.module";
import {TextDiffComponent} from "./text-diff.component";
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import {FormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";

@NgModule({
  imports: [TextDiffRoutingModule, NzCodeEditorModule, FormsModule, NzButtonModule],
  declarations: [TextDiffComponent],
  exports: [TextDiffComponent]
})
export class TextDiffModule { }
