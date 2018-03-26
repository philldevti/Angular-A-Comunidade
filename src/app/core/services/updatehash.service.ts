import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Card } from '../model/card';
import { LowerCasePipe } from '@angular/common';

@Injectable()
export class UpdatehashService {

  private newCardSource = new Subject<Card>();
  newCard$ = this.newCardSource.asObservable();

  updateHashTag(card: Card) {
      this.newCardSource.next(card);
  }

  findHashtags(searchText) {
    const regexp = /\B\#\w\w+\b/g;
    const result = searchText.match(regexp);
    if (result) {
      return Array.from(new Set( result )).map(v => this.toLowerCase(v) );
    } else {
      return ['#'];
    }
  }

  private toLowerCase(str) {
    return str.toLowerCase();
  }

  createNewCard(title, subtitle, urlPhoto, comment, hashtag) {
    const postCard = new Card();
    postCard.title = title;
    postCard.subtitle = subtitle;
    postCard.urlPhoto = urlPhoto;
    postCard.comment = comment;
    postCard.hashtag =  hashtag;

    return postCard;
  }


}
