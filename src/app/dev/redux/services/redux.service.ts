import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { TutorialUpdate } from '../models/tutorial.model';
import { UpdateTutorial } from '../actions/tutorial.actions';

@Injectable({
  providedIn: 'root'
})
export class ReduxService {
  subject = new Subject<any>();

  sendMessage(obj: TutorialUpdate) {
    this.subject.next({
      index: obj.index,
      name: obj.name,
      url: obj.url
    });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() {}
}
