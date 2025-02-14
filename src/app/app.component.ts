import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideHeaderComponent } from "./side-header/side-header.component";
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SearchComponent } from './search/search.component';
import { Refund } from '../models/refund.model';
import { ToDO } from '../models/todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login.component';
import { User } from '../models/user.model';
import { SignupComponent } from "./signup/signup.component";
import { MerchantSignupComponent } from "./merchant-signup/merchant-signup.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, MerchantSignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  user?:User;
  isAuthenticated:boolean=false;
  mobileNo:string='';

  todos:ToDO[]=[{
    date:'2021-09-01',
    description:'Buy groceries',
    isCompleted:false
  }, {
    date:'2021-09-02',
    description:'Pay bills',
    isCompleted:false
  }, {
    date:'2021-09-03',
    description:'Complete assignment',
    isCompleted:false
  }];
  constructor(){
      this.mobileNo = localStorage.getItem('mobile') || '';
      const tmp=localStorage.getItem('user');
      if(tmp){
        this.user=JSON.parse(tmp);
        this.isAuthenticated=true;
      }
      
    }


    onLoginEvent(user:User){
      this.user=user;
      this.isAuthenticated=true;
      localStorage.setItem('user',JSON.stringify(user));

    }
}
