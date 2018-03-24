import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Card } from '../../model/card';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  @Input() comentario: any = null;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  postCard: Card;
  listPost: Card[] = new Array<Card>();
  cartao: Card = new Card();

  ngOnInit() {
    this.cartao.comment = 'Olá';
    this.cartao.urlPhoto = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
    this.cartao.title = 'Ozzy';
    this.cartao.subtitle = 'O cachorro baum!';

    this.listPost.push(this.cartao);
  }

  onClickNewPost(e) {
    this.postCard = new Card();
    this.postCard.title = this.cartao.title;
    this.postCard.subtitle = this.cartao.subtitle;
    this.postCard.urlPhoto = this.cartao.urlPhoto;
    this.postCard.comment = e;
    this.listPost.push(this.postCard);
    this.notify.emit(e);
  }

  mostrarMsg() {
    alert('Informe um texto');
  }

}
