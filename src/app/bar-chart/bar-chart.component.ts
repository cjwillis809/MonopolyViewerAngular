import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { Property } from '../models/property';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  private svg;
  private margin = 50;
  private width = 500 - (this.margin * 2);
  private height = 700 - (this.margin * 2);
  @Input() chartData: Property[]

  constructor() { }

  ngOnInit() {
    this.createSvg();
    this.drawBars(this.chartData);
  }

  private createSvg() {
    this.svg = d3.select("figure#bar-chart")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  drawBars(data: any[]) {
    console.log(data)
    // Cerate x and y scales
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, function (d) {
        return d.property_value
      })])
      .range([0, this.width])

    const yScale = d3.scaleBand()
      .domain(data.map((d) => d.name))
      .rangeRound([this.height, 0])

    // Draw Axes on the chart
    this.svg.append("g")
      .attr("transform", "translate(0," + this.width + ")")
      .selectAll("text")
      .attr("transform", "translate(-10,0)rorate(-45)")
      .style("text-anchor", "end")
      .style("color", "white");

    this.svg.append("g")
      .call(d3.axisLeft(yScale)
        .tickSize(0))

    // Create and fill bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", d => yScale(d.name))
      .attr("width", (d) => xScale(d.property_value))
      .attr("height", "20px")
      .attr("fill", d => d.color_group)
  }

}
