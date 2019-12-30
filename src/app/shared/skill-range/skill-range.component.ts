import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tda-skill-range',
  templateUrl: './skill-range.component.html',
  styleUrls: ['./skill-range.component.scss']
})
export class SkillRangeComponent implements OnInit {
  @Input() value: number;
  @Input() min: number;
  @Input() max: number;
  percentage: number;
  constructor() {}

  ngOnInit() {
    this.percentage = Math.round((this.value / (this.max - this.min)) * 100);
  }
}
