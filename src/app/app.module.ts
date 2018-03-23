import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComunidadeModule } from './core/main-comunidade/main-comunidade.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainComunidadeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
