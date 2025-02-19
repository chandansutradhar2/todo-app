import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  mobileNumber:string="";
  constructor(private activatedRoute: ActivatedRoute, private router:Router) {
    console.log('HomeComponent initialized...');
    this.mobileNumber = this.activatedRoute.snapshot.paramMap.get('mobile')!;

    // this.activatedRoute.data.subscribe(data => {
    //   console.log('Observable Data:', data);
    // });

  }

  routeTo(route:string){
    this.router.navigate([route]);
  }
}
