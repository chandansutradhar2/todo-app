import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "../../models/user.model";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@Component({
standalone: true,
selector:'app-login',
imports:[CommonModule, ReactiveFormsModule],
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

constructor(){
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
    mobile:this.mobileNo,
    role:'user',
    status:'active'
};
    
//this.onLoginSuccess.emit(user);

}
}