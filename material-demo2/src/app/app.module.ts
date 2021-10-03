import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ButtonsComponent } from './buttons/buttons.component';
import { ModalComponent } from './modal/modal.component';
import {MatComponentsModule} from "./mat-components.module";






@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatComponentsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
