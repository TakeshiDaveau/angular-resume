import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tda-list',
  template: '<ng-content></ng-content>',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  @HostBinding('class') class = 'tda-list';
  constructor() {}

  ngOnInit() {}
}

// tslint:disable-next-line:max-classes-per-file
@Component({
  selector: 'tda-list-title',
  template: '<ng-content></ng-content>',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListTitleComponent implements OnInit {
  @HostBinding('class') class = 'tda-list-title';
  constructor() {}

  ngOnInit() {}
}

// tslint:disable-next-line:max-classes-per-file
@Component({
  selector: 'tda-list-item',
  template:
    '<div class="tda-list-item">' +
    '<span *ngIf="ladder" class="tda-list-item__ladder"><span class="tda-list-item__ladder-bullet"></span></span>' +
    '<ng-content *ngIf="!ladder" select=".tda-list-item__icon"></ng-content>' +
    '<ng-content select=".tda-list-item__title"></ng-content>' +
    '<ng-content select=".tda-list-item__subtitle"></ng-content>' +
    '<ng-content select=".tda-list-item__content"></ng-content>' +
    '<ng-content select="aside"></ng-content></div>',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListItemComponent implements OnInit {
  @Input() ladder: boolean;
  constructor() {}

  ngOnInit() {}
}
