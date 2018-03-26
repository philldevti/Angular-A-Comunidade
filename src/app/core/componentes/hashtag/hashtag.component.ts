import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../model/card';
import { UpdatehashService } from '../../services/updatehash.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  private listHash: Card[] = new Array<Card>();
  subscription: Subscription;
  @Input() newHashtag: any;

  constructor(private newHash: UpdatehashService) {
    this.subscription = newHash.newCard$.subscribe(
      card => {
          this.addNewHash(card);
      });
  }

  ngOnInit() {
  }

  addNewHash(card: Card): void {
    const hashTags = this.newHash.findHashtags(card.hashtag);

    hashTags.forEach(hashT => {
      const newCard = this.newHash.createNewCard(card.title, card.subtitle, card.urlPhoto, card.comment, hashT);
      this.listHash.push(newCard);
    });
  }

}
