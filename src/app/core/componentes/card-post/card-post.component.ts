import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../model/card';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {

  @Input() cartao: Card;
  constructor() { }

  ngOnInit() {

  }

}
