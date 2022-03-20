import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private route:Router) { }
  
  loginForm:FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })

  }

  get uname(){
    return this.loginForm.get("username").value;
  }
  get pass(){
    return this.loginForm.get("password").value;
  }
  loginAction(){
    if(this.loginForm.valid){
      if(this.uname == "admin" && this.pass == "admin")
      {
        this.route.navigate(['dashboard','employee'])
      }else{
        alert("Invalid Login Credentials")
      }
    }
  }
  navigateToRegistration(){
    this.route.navigate(['register']);
  }

}
