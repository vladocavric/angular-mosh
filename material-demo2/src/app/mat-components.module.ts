import { NgModule } from '@angular/core';
import {MatSliderModule} from "@angular/material/slider";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatMomentDateModule, MomentDateModule} from "@angular/material-moment-adapter";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  exports: [
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MomentDateModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule
    // MatNativeDateModule
  ]
})
export class MatComponentsModule { }
