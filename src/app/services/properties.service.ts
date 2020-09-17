import { Property } from './../models/property';
import { Injectable } from '@angular/core';
import * as data from '../data/properties.json';

@Injectable()
export class PropertiesService {

  private allProperties: Property[]
  private displayProperties: Property[]

  constructor() { }

  fetchProperties() {
    // Need .default as that is the top-level object that holds the data
    // TODO: Find a way to remove the .default error
    this.allProperties = (data as Property[]).default; 
    this.displayProperties = this.allProperties;

    console.log(this.allProperties);
  }

  getPropertiesByGroup(filter: string) {}

  getPropertyGroups(): string[] {
    // Map the color groups to an array
    let colorGroups = this.allProperties.map(p => p.color_group);
    colorGroups.unshift('All');
    // TODO: Make values prettier

    // Create and return a unique array using Set
    let colorSet = Array.from(new Set(colorGroups));
    return colorSet;
  }

  getAllProperties(): Property[] {
    return this.allProperties;
  }

  getSortedProperties(): Property[] {
    return this.allProperties.sort((a, b) => {
      return a.property_value - b.property_value
    })
  }
}
