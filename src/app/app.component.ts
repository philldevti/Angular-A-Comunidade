import { Component, Output, Input } from '@angular/core';
import { Card } from './core/model/card';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent  {
  @Output() newHashTag: any;

  constructor() {

  }

  onNotifyComment(e: Card): void {
    console.log('Passou app.component');
    this.newHashTag = e;
  }
}
