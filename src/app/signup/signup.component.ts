import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  standalone: true,
})
export class SignupComponent {
  fullname=new FormControl('');
  mobile=new FormControl('');
  email=new FormControl('');
  password=new FormControl('');

  constructor(){
    
  }
  onSubmit(){
    if(this.fullname.value=='' || this.mobile.value=='' || this.email.value=='' || this.password.value==''){
      alert('Please fill all the fields');
    }
    
  }
}
