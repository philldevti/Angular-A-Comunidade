import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioComponent } from '../componentes/comentario/comentario.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatCard, MatCardModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CardPostComponent } from '../componentes/card-post/card-post.component';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    ComentarioComponent,
    CardPostComponent
  ],
  imports: [
    CommonModule, FormsModule,
    BrowserAnimationsModule,
    MatIconModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule
  ],
  exports: [
    ComentarioComponent, MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule
  ],

  bootstrap: [ComentarioComponent]
})
export class MainComunidadeModule { }
