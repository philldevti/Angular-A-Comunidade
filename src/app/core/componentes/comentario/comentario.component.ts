import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  @Input() comentario: any = null;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(e) {
    this.notify.emit(e);
  }

  mostrarMsg() {
    alert('Informe um texto');
  }

}
