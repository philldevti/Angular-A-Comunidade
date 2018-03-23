import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioComponent } from '../componentes/comentario/comentario.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';


@NgModule({
  declarations: [
    ComentarioComponent
  ],
  imports: [
    CommonModule, BrowserAnimationsModule, MatIconModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatInputModule
  ],
  exports: [
    ComentarioComponent, MatButtonModule, MatCheckboxModule, MatInputModule
  ],

  bootstrap: [ComentarioComponent]
})
export class MainComunidadeModule { }
