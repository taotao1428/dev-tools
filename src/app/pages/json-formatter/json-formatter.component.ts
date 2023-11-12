import {Component, OnChanges, OnInit, SimpleChanges} from "@angular/core";

@Component({
  selector: "json-formatter",
  templateUrl: "json-formatter.component.html",
  styleUrls: ["json-formatter.component.less"]
  })
export class JsonFormatterComponent implements OnInit {
  code: string = "{\"Hello\": \"World!\"}"
  ngOnInit(): void {

  }


  pretty() {
    let obj = JSON.parse(this.code)
    this.code = JSON.stringify(obj, null, 2)
  }

  minify() {
    let obj = JSON.parse(this.code)
    this.code = JSON.stringify(obj)
  }
}
