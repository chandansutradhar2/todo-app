import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Refund } from '../models/refund.model';
import { ToDO } from '../models/todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet, RouterModule],
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
  constructor(private router:Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Navigated to:', event.url);
      }
    });
    
      this.mobileNo = localStorage.getItem('mobile') || '';
      const tmp=localStorage.getItem('user');
      if(tmp){
        this.user=JSON.parse(tmp);
        this.router.navigate(['/home']);
      }else{
        this.router.navigate(['/login']);
      }
      
    }

}
