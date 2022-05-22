import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule} from "@ngrx/store";
import { simpleReducer } from './simple.reducer';
import { postReducer } from './post.reducer';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      //@ts-ignore
      post: postReducer,
      message: simpleReducer
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
