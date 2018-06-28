import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { LineasComponent } from './components/lineas/lineas.component';

@NgModule({
  declarations: [
    AppComponent,
    LineasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
