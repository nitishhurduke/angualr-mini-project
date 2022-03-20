import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Mini_Project';
  
  constructor(private router:Router){

  }

  // navigateToCompany(){
  //   this.router.navigate(['company']);
  // }
  // navigateToCompanyList(){
  //   this.router.navigate(['company','list']);
  // }
}