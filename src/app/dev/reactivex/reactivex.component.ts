import { Component, OnInit } from '@angular/core';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@Component({
  selector: 'app-reactivex',
  templateUrl: './reactivex.component.html',
  styleUrls: ['./reactivex.component.scss']
})
export class ReactivexComponent implements OnInit {
  constructor() {
    let list = [1, 2];
    list = [...list, 3, 4];
    console.log('list: ', list);

    var list2 = [1, 2];
    list2 = [0, ...list2, 4];
    console.log('list2: ', list2); // [0,1,2,4]

    const [x, y, ...remaining] = [1, 2, 3, 4, 5, 6];
    const remain = [x, y, ...remaining];
    console.log(remain); // 1,2,[3,4]
  }

  ngOnInit() {}
}
