import {Component, OnInit} from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {Post} from "./post.model";
import * as PostActions from './post.actions';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngrxFire';

  post: Observable<Post>;
  text: string = '';

  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
  }

  ngOnInit() {
    this.store.dispatch(new PostActions.Reset);
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset);
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote);
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote);
  }

  // spanishMessage() {
  //   this.store.dispatch({type: 'SPANISH'});
  // }
  //
  // frenchMessage() {
  //   this.store.dispatch({type: 'FRENCH'});
  // }
}
