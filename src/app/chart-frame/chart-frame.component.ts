import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chart-frame',
  templateUrl: './chart-frame.component.html',
  styleUrls: ['./chart-frame.component.css']
})
export class ChartFrameComponent implements OnInit {

  @Input() chartTitle: string
  
  constructor() { }

  ngOnInit() {
  }

}
