import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'value-filter',
  templateUrl: './value-filter.component.html',
  styleUrls: ['./value-filter.component.css']
})
export class ValueFilterComponent implements OnInit {

  propertyGroups: string[]

  constructor(private propService: PropertiesService) { }

  ngOnInit() {
    this.propertyGroups = this.propService.getPropertyGroups();
  }

}
