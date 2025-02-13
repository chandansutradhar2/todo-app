import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "../../models/user.model";

@Component({
standalone: true,
selector:'app-login',
templateUrl:'./login.component.html',
styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit{
@Input() mobileNo: string='';
@Output() onLoginSuccess: EventEmitter<User> = new EventEmitter<User>();
constructor(){
    console.log('LoginComponent created...', this.mobileNo);
}

ngOnInit(): void {
    console.log('LoginComponent initialized...', this.mobileNo);
}


onLogin(){
//todo code to validate user
//assume validation via api is success
const user:User={
    name:'Test User',
    email:'testuser@gmail.com',
    password:'pass@123',
    mobile:this.mobileNo,
    role:'user',
    status:'active'
};

this.onLoginSuccess.emit(user);
}
}