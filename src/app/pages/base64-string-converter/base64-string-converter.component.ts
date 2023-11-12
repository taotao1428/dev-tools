import {Component, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {Base64} from "js-base64";

@Component({
  selector: "base64-string-converter",
  templateUrl: "base64-string-converter.component.html",
  styleUrls: ["base64-string-converter.component.less"]
  })
export class Base64StringConverterComponent implements OnInit {
  input: string = "Hello world";
  base64Input: string = "";
  ngOnInit(): void {

  }

  encode() {
    this.base64Input = Base64.encode(this.input.trim());
  }

  decode() {
    this.input = Base64.decode(this.base64Input.trim());
  }



}
