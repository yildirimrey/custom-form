import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextFieldComponent } from './custom-controls/text-field/text-field.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyFormComponent } from './components/my-form/my-form.component'


@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
