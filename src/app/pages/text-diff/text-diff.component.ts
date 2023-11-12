import {Component, OnChanges, OnInit, SimpleChanges} from "@angular/core";

@Component({
  selector: "text-diff",
  templateUrl: "text-diff.component.html",
  styleUrls: ["text-diff.component.less"]
  })
export class TextDiffComponent implements OnInit {
  code: string = "{\"Hello\": \"World!\"}"
  code2: string = "{\"Hello\": \"Text diff!\"}"
  ngOnInit(): void {

  }

}
