import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ToDO } from '../../models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule, ReactiveFormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit, OnDestroy{

  todos:ToDO[]=[];
  frmGrp:FormGroup=new FormGroup({
    'description':new FormControl('',[Validators.required, Validators.minLength(5)])
  });
  constructor(private activatedRoute: ActivatedRoute, private router:Router) {

  }

  ngOnInit(): void {
    const tmp=localStorage.getItem('todos');
    if(tmp){
      this.todos=JSON.parse(tmp);
    }
  }
  

  deleteTask(index:number){
    this.todos.splice(index,1);
  }
  addTodo(){
    const data=this.frmGrp.value;
    const todo:ToDO={
      description:data.description,
      date:new Date().toISOString(),
      isCompleted:false
    };
    this.todos.push(todo);
    this.frmGrp.reset();
  }

  routeTo(route:string){
    this.router.navigate([route]);
  }


  
  ngOnDestroy(): void {
    localStorage.setItem('todos',JSON.stringify(this.todos));
   }
  

}
