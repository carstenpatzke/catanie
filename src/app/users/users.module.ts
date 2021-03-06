import { UserEffects } from "./../state-management/effects/user.effects";
import { EffectsModule } from "@ngrx/effects";
import { ADAuthService } from "./adauth.service";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "users/login/login.component";
import { NgModule } from "@angular/core";
import { SharedCatanieModule } from "shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { UserSettingsComponent } from "users/user-settings/user-settings.component";
import { userReducer } from "state-management/reducers/user.reducer";
import {
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
} from "@angular/material";
import { PrivacyDialogComponent } from "./privacy-dialog/privacy-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([UserEffects]),
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedCatanieModule,
    StoreModule.forFeature("users", userReducer)
  ],
  declarations: [LoginComponent, UserSettingsComponent, PrivacyDialogComponent],
  entryComponents: [PrivacyDialogComponent],
  providers: [ADAuthService]
})
export class UsersModule {}
