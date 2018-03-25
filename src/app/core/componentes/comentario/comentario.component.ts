import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Card } from '../../model/card';
import { UpdatehashService } from '../../services/updatehash.service';


@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  @Input() comentario: any = null;
  @Output() notifyNewComment: EventEmitter<Card> = new EventEmitter<Card>();

  constructor(private newHash: UpdatehashService) { }

  postCard: Card;
  listPost: Card[] = new Array<Card>();
  cartao: Card = new Card();

  ngOnInit() {

  }

  onClickNewPost(e) {
    this.postCard = new Card();
    this.postCard.title = 'Olá'; // this.cartao.title;
    this.postCard.subtitle = 'O cachorro baum!'; // this.cartao.subtitle;
    this.postCard.urlPhoto = 'https://material.angular.io/assets/img/examples/shiba1.jpg'; // this.cartao.urlPhoto;
    this.postCard.comment = e;
    this.postCard.hashtag =  '#CachorroBaum';
    this.listPost.push(this.postCard);
    console.log('Passou comentario.component');
    this.newHash.updateHashTag(this.postCard);
    this.notifyNewComment.emit(this.postCard);
  }

  mostrarMsg() {
    alert('Informe um texto');
  }

}
