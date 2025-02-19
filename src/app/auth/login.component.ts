import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "../../models/user.model";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";

@Component({
standalone: true,
selector:'app-login',
imports:[CommonModule, ReactiveFormsModule, RouterModule],
templateUrl:'./login.component.html',
styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit{
@Input() mobileNo:string='';
frmGrp = new FormGroup({
    mobile: new FormControl(this.mobileNo,[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
});

password:string='';
@Output() onLoginSuccess: EventEmitter<User> = new EventEmitter<User>();

constructor(private router:Router){
}

ngOnInit(): void {
    console.log('LoginComponent initialized...', this.mobileNo);
}


onLogin(){
const data=this.frmGrp.value;
console.log(data);

const user:User={
    name:'Test User',
    email:'testuser@gmail.com',
    password:'pass@123',
    mobile:data.mobile || '', //store mobile number if available or store empty string
    role:'user',
    status:'active'
};

this.router.navigate(['/home',user.mobile]);

}

redirectToSignUp(){
    console.log('Redirecting to signup page...');
    this.router.navigate(['/signup']);
}   
}