import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:CommonService,private router :Router) { }

  registrationForm:FormGroup;

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      confPassword:['',Validators.required]
    })
  }

  get name(){
    return this.registrationForm.get("name").value;
  }
  get uname(){
    return this.registrationForm.get("username").value;
  }
  get pass(){
    return this.registrationForm.get("password").value;
  }
  get conPass(){
    return this.registrationForm.get("confPassword").value;
  }
  registerAdmin(){
    
    let admin:Admin={
      name: this.name,
      username: this.uname,
      password: this.pass
    }
    if(this.registrationForm.valid){
      this.service.addAdmin(admin).subscribe(
        res => {
          alert("Successfully Registered....Redirecting to Login Page...");
          this.registrationForm.reset
          this.router.navigate(['login'])
        }
      );
    }
  }

}
