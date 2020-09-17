import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValueFilterComponent } from './value-filter/value-filter.component';
import { PropertiesService } from './services/properties.service';
import { ChartFrameComponent } from './chart-frame/chart-frame.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ValueFilterComponent,
    ChartFrameComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PropertiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
