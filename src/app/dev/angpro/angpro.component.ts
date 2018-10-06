import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angpro',
  templateUrl: './angpro.component.html',
  styleUrls: ['./angpro.component.scss']
})
export class AngproComponent implements OnInit {
  counterProgress: number = 0;
  totalCountdown: number = 15;

  constructor() {}

  updateProgress($event) {
    this.counterProgress =
      ((this.totalCountdown - $event) / this.totalCountdown) * 100;
  }

  countdownFInished() {
    console.log('countdown has finished');
  }

  ngOnInit() {}
}
