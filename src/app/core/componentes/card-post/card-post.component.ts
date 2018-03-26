import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {
  @Input() escondeCard: boolean;
  @Input() escondeHashTag: boolean;

  @Input() cartao: Card;
  @Input() totalHashTag: number;
  constructor() { }

  ngOnInit() {

  }
}
