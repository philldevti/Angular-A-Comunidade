import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Card } from '../model/card';

@Injectable()
export class UpdatehashService {

  private newCardSource = new Subject<Card>();
  newCard$ = this.newCardSource.asObservable();

  updateHashTag(card: Card) {
      this.newCardSource.next(card);
  }
}
