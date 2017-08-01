import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AttInputComponent } from './att-input/att-input.component';
import {MdlModule} from "@angular-mdl/core";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,AttInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // NgModule,
    MdlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
