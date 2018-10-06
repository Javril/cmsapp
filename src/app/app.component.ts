import { Component } from '@angular/core';
import { AppLoader } from './config/app-loader';
import { Storage } from './storage/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cmsappv2';

  constructor(private appLoader: AppLoader, private storage: Storage) {
    this.appLoader.load();
    console.log('***********');
    this.storage.save('a', 'b');
    console.log(this.storage.read('a'));
    // this.storage.delete('a');
    console.log(this.storage.read('a'));
    console.log('***********');
  }
}
