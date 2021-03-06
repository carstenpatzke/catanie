import { DatasetEffects } from "./../state-management/effects/datasets.effects";
import { EffectsModule } from "@ngrx/effects";
import { AppConfigModule } from "app-config.module";
import { LinkyModule } from "ngx-linky";
import { ArchivingService } from "./archiving.service";
import { BatchCardComponent } from "./batch-card/batch-card.component";
import { BatchViewComponent } from "./batch-view/batch-view.component";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { NgModule } from "@angular/core";
import { NgxJsonViewerModule } from "ngx-json-viewer";
import { RouterModule } from "@angular/router";
import { SharedCatanieModule } from "shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { datasetsReducer } from "state-management/reducers/datasets.reducer";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  SatDatepickerModule
} from "saturn-datepicker";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatStepperModule,
  MatSidenavModule
} from "@angular/material";

import { PublishComponent } from "./publish/publish.component";
import { ScientificConditionDialogComponent } from "./scientific-condition-dialog/scientific-condition-dialog.component";
import { jobsReducer } from "../state-management/reducers/jobs.reducer";
import { LogbooksModule } from "logbooks/logbooks.module";
import { ReduceComponent } from "./reduce/reduce.component";
import { DatasetDetailsDashboardComponent } from "./dataset-details-dashboard/dataset-details-dashboard.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DatablocksComponent } from "./datablocks-table/datablocks-table.component";
import { DatafilesComponent } from "./datafiles/datafiles.component";
import { DatasetDetailComponent } from "./dataset-detail/dataset-detail.component";
import { DatasetTableComponent } from "./dataset-table/dataset-table.component";
import { DatasetsFilterComponent } from "./datasets-filter/datasets-filter.component";
import { AddDatasetDialogComponent } from "./add-dataset-dialog/add-dataset-dialog.component";
import { DatasetTableSettingsComponent } from "./dataset-table-settings/dataset-table-settings.component";
import { DatasetTableActionsComponent } from "./dataset-table-actions/dataset-table-actions.component";
import { DatasetLifecycleComponent } from "./dataset-lifecycle/dataset-lifecycle.component";

@NgModule({
  imports: [
    AppConfigModule,
    CommonModule,
    EffectsModule.forFeature([DatasetEffects]),
    FlexLayoutModule,
    FormsModule,
    LinkyModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatOptionModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    NgxJsonViewerModule,
    ReactiveFormsModule,
    RouterModule,
    SatDatepickerModule,
    SharedCatanieModule,
    StoreModule.forFeature("datasets", datasetsReducer),
    StoreModule.forFeature("jobs", jobsReducer),
    LogbooksModule
  ],
  declarations: [
    BatchCardComponent,
    BatchViewComponent,
    DashboardComponent,
    DatablocksComponent,
    DatafilesComponent,
    DatasetDetailComponent,
    DatasetTableComponent,
    DatasetsFilterComponent,
    PublishComponent,
    ScientificConditionDialogComponent,
    ReduceComponent,
    DatasetDetailsDashboardComponent,
    AddDatasetDialogComponent,
    DatasetTableSettingsComponent,
    DatasetTableActionsComponent,
    DatasetLifecycleComponent
  ],
  entryComponents: [
    AddDatasetDialogComponent,
    ScientificConditionDialogComponent
  ],
  providers: [
    ArchivingService,
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: "sv-SE" }
  ],
  exports: [
    DashboardComponent,
    DatablocksComponent,
    DatafilesComponent,
    DatasetDetailComponent,
    DatasetTableComponent,
    DatasetsFilterComponent,
    BatchCardComponent
  ]
})
export class DatasetsModule {}
