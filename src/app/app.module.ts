import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataFieldComponent } from './components/data-field/data-field.component';
import { EmpoyeeCardComponent } from './components/empoyee-card/empoyee-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DataFieldComponent,
    EmpoyeeCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
