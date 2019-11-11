import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange
} from "@angular/core";
import { ScientificMetaData } from "../scientific-metadata.module";

@Component({
  selector: "metadata-view",
  templateUrl: "./metadata-view.component.html",
  styleUrls: ["./metadata-view.component.scss"]
})
export class MetadataViewComponent implements OnInit, OnChanges {
  @Input() metadata: object;

  tableData: ScientificMetaData[];
  columnsToDisplay: string[] = ["name", "value", "unit"];

  createMetadataArray(metadata: object): ScientificMetaData[] {
    const metadataArray = [];
    Object.keys(metadata).forEach(key => {
      let metadataObject: ScientificMetaData;
      if (metadata[key]["type"]) {
        metadataObject = {
          name: key,
          type: metadata[key].type,
          value: metadata[key].value,
          unit: metadata[key].unit
        };
      } else {
        metadataObject = {
          name: key,
          type: "",
          value: JSON.stringify(metadata[key]),
          unit: ""
        };
      }
      metadataArray.push(metadataObject);
    });
    return metadataArray;
  }

  constructor() {}

  ngOnInit() {
    if (this.metadata) {
      this.tableData = this.createMetadataArray(this.metadata);
    }
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      if (propName === "metadata") {
        this.metadata = changes[propName].currentValue;
        this.tableData = this.createMetadataArray(this.metadata);
      }
    }
  }
}
