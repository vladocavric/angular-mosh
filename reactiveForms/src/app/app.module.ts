import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {SharedModule} from './shared/shared.module';
import { NewPasswordComponent } from './new-password/new-password.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    NewPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
