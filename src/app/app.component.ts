import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideHeaderComponent } from "./side-header/side-header.component";
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SearchComponent } from './search/search.component';
import { Refund } from '../models/refund.model';
import { ToDO } from '../models/todo.model';

@Component({
  selector: 'app-root',
  imports: [ SideHeaderComponent, BookmarkComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';

  refund:Refund={
    refundAmount:1500,
    refundDate:'01-01-2025',
    refundStatus:false
  };

  todo:ToDO[]=[{
    description:'Buy Groceries',
    date:'01-02-2025',
    isCompleted:false
  }, {
    date:'01-02-2025',
    description:'Buy Pencil',
    isCompleted:false,
  }, {
    description:'Sell Old Newspaper',
    date:'01-02-2025',
    isCompleted:false
  }]

  constructor(){
  }
}
