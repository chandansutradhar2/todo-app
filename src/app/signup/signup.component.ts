import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  standalone: true,
})
export class SignupComponent {
  fullname: string='';
  mobile:string='';
  email:string='';
  password:string='';

  onSubmit(){
    console.log(this.fullname);
    console.log(this.mobile);
    console.log(this.email);
    console.log(this.password);
  }
}
