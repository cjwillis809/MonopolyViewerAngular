import { Component, OnInit } from '@angular/core';
import { PropertiesService } from './services/properties.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private propService: PropertiesService) {}

  ngOnInit(): void {
    this.propService.fetchProperties();
  }

  title = 'monopoly-viewer';
}
