import { Property } from './models/property';
import { Component, OnInit } from '@angular/core';
import { PropertiesService } from './services/properties.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayData: Property[]
  constructor(private propService: PropertiesService) {}

  ngOnInit(): void {
    this.propService.fetchProperties();
    this.displayData = this.propService.getSortedProperties();
  }

  getDisplayData() {
    return this.displayData;
  }

  title = 'monopoly-viewer';
}
