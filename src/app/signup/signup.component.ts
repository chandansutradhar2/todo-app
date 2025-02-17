import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  standalone: true,
})
export class SignupComponent {

  frmGrp = new FormGroup({
    fullname: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z][a-zA-Z'’-]{1,}(?: [a-zA-Z][a-zA-Z'’-]{1,})+$/)]),
    mobile: new FormControl('',[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
  });

  constructor(private router:Router){
    
  }
  onSubmit(){
    
    debugger;
    console.log(this.frmGrp.value);
  }

  redirectToLogin(){
    this.router.navigate(['/login']);
  }
}
