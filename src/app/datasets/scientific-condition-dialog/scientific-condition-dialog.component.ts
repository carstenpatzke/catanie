import { Component, Inject } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { Store, select } from "@ngrx/store";
import { Dataset } from "shared/sdk";
import { fetchMetadataKeysAction } from "state-management/actions/datasets.actions";
import { getMetadataKeys } from "state-management/selectors/datasets.selectors";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { startWith, map } from "rxjs/operators";
import { UnitsService } from "shared/services/units.service";
import { AppConfig, APP_CONFIG } from "app-config.module";

@Component({
  selector: "scientific-condition-dialog",
  templateUrl: "scientific-condition-dialog.component.html"
})
export class ScientificConditionDialogComponent {
  metadataKeys$ = this.store.pipe(select(getMetadataKeys));

  scientificForm = new FormGroup({
    lhs: new FormControl("", [Validators.required, Validators.minLength(2)]),
    relation: new FormControl("GREATER_THAN", [
      Validators.required,
      Validators.minLength(9)
    ]),
    rhs: new FormControl("", [Validators.required, Validators.minLength(1)]),
    unit: new FormControl("")
  });

  unitsEnabled = this.appConfig.scienceSearchUnitsEnabled;

  units: string[] = [];
  filteredUnits$ = this.scientificForm.get("unit").valueChanges.pipe(
    startWith(""),
    map((value: string) => {
      const filterValue = value.toLowerCase();
      return this.units.filter(unit =>
        unit.toLowerCase().includes(filterValue)
      );
    })
  );

  onChange(metadataKey: string): void {
    this.store.dispatch(fetchMetadataKeysAction({ metadataKey }));
  }

  add(): void {
    const { lhs, relation, unit } = this.scientificForm.value;
    const rawRhs = this.scientificForm.get("rhs").value;
    const rhs =
      relation === "EQUAL_TO_STRING" ? String(rawRhs) : Number(rawRhs);
    this.scientificForm.patchValue({ rhs });
    this.dialogRef.close({ data: { lhs, relation, rhs, unit } });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  getUnits(metadataKey: string): void {
    this.units = this.unitsService.getUnits(metadataKey);
    this.toggleUnitField();
  }

  toggleUnitField(): void {
    const lhsInvalid = this.scientificForm.get("lhs").invalid;
    const { relation } = this.scientificForm.value;
    const stringRelation = relation === "EQUAL_TO_STRING" ? true : false;
    const unitField = this.scientificForm.get("unit");
    if (lhsInvalid || stringRelation) {
      unitField.disable();
    } else {
      unitField.enable();
    }
  }

  isInvalid(): boolean {
    const { invalid } = this.scientificForm;
    const { lhs, relation, rhs } = this.scientificForm.value;
    if (invalid) {
      return invalid;
    } else {
      if (relation !== "EQUAL_TO_STRING" && isNaN(Number(rhs))) {
        return true;
      } else {
        return lhs.length * rhs.length === 0;
      }
    }
  }

  get lhs(): string {
    return this.scientificForm.get("lhs").value;
  }

  constructor(
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    public dialogRef: MatDialogRef<ScientificConditionDialogComponent>,
    private store: Store<Dataset>,
    private unitsService: UnitsService
  ) {}
}
