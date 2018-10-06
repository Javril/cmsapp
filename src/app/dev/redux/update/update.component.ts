import { Component, OnInit } from '@angular/core';
import { ReduxService } from '../services/redux.service';
import { UpdateTutorial } from '../actions/tutorial.actions';
import { TutorialUpdate } from '../models/tutorial.model';
import { Store } from '@ngrx/store';
import * as TutorialActions from './../actions/tutorial.actions';
import { ReduxState } from '../redux.state';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  reduxTutorial = {};

  constructor(
    private reduxService: ReduxService,
    private store: Store<ReduxState>
  ) {}

  ngOnInit() {
    this.reduxService.getMessage().subscribe((redux: TutorialUpdate) => {
      this.reduxTutorial = redux;
      console.log('this.reduxTutorial: ', this.reduxTutorial);
    });
  }

  updateTutorial(id: number, name: string, url: string) {
    this.store.dispatch(
      new TutorialActions.UpdateTutorial({
        index: id,
        name: name,
        url: url
      })
    );
  }
}
