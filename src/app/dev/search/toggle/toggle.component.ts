import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input()
  on: boolean;
  @Output()
  toggled: EventEmitter<boolean> = new EventEmitter();

  onClick() {
    console.log('on:', this.on);
    this.toggled.emit(this.on);
  }

  constructor() {}

  ngOnInit() {}
}
