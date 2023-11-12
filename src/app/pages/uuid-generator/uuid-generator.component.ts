import {Component, OnChanges, OnInit, SimpleChanges} from "@angular/core";

@Component({
  selector: "uuid-generator",
  templateUrl: "uuid-generator.component.html",
  styleUrls: ["uuid-generator.component.less"]
  })
export class UuidGeneratorComponent implements OnInit {
  count: number = 5
  uuids: string = "hello!"
  ngOnInit(): void {

  }

  genUuids() {
    let ids = ""
    for (let i = 0; i < this.count; i++) {
      ids += this.genUuid() + "\n"
    }

    this.uuids = ids
  }

  private genUuid() {
    return crypto.randomUUID()
  }

}
