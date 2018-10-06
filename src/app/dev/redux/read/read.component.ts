import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tutorial, TutorialUpdate } from '../models/tutorial.model';
import { Store } from '@ngrx/store';
import { ReduxState } from '../redux.state';
import * as TutorialActions from './../actions/tutorial.actions';
import { ReduxService } from '../services/redux.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  // Section 1
  tutorials: Observable<Tutorial[]>;

  // Section 2
  constructor(
    private reduxService: ReduxService,
    private store: Store<ReduxState>
  ) {
    this.tutorials = store.select('tutorial');
  }

  // In the class, add:
  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

  loadTutorial(i: number, tutorial: Tutorial) {
    this.reduxService.sendMessage({
      index: i,
      name: tutorial.name,
      url: tutorial.url
    });
  }

  ngOnInit() {}
}
