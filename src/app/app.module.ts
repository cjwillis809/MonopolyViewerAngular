import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValueFilterComponent } from './value-filter/value-filter.component';
import { PropertiesService } from './services/properties.service';

@NgModule({
  declarations: [
    AppComponent,
    ValueFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PropertiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
