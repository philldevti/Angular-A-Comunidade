import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
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
  @ViewChild('mensagem') mensagem;

  postCard: Card;
  listPost: Card[] = new Array<Card>();
  cartao: Card = new Card();

  ngOnInit() {

  }

  constructor(private newCard: UpdatehashService) { }

  onClickNewPost(e) {
    const hashTags = this.newCard.findHashtags(e);

    this.postCard = this.newCard.createNewCard('Bidu',
                                    'O cachorro baum!',
                                    'https://material.angular.io/assets/img/examples/shiba1.jpg',
                                    e,
                                    hashTags.join(' '));

    this.listPost.push(this.postCard);

    this.newCard.updateHashTag(this.postCard);

    this.notifyNewComment.emit(this.postCard);

    this.mensagem.nativeElement.value = '';
    this.mensagem.nativeElement.focus();
  }

  mostrarMsg() {
    alert('Informe um texto');
  }
}
