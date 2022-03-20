import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private fb: FormBuilder,private location:Location,private service:CommonService,private routes:Router) { }

  updateForm: FormGroup

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      id:[],
      ename: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      designation: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.editData();
  }


  editData(){
    let emp :any = this.location.getState();
    console.log("Employee with Id: "+emp.id)
    if(emp.id != 0){
      this.updateForm.get('id').setValue(emp.id);
      this.updateForm.get('ename').setValue(emp.ename);
      this.updateForm.get('email').setValue(emp.email);
      this.updateForm.get('mobile').setValue(emp.mobile);
      this.updateForm.get('designation').setValue(emp.designation);
      this.updateForm.get('username').setValue(emp.username);
      this.updateForm.get('password').setValue(emp.password);
    }
  }

  update(){
   if(this.updateForm.valid)
   {
    let emp:Employee;
    emp = this.updateForm.value 
    console.log(this.updateForm)
    this.service.updateEmp(emp).subscribe();
    // this.routes.navigate(['dashboard','employee','list']);
    window.location.href = "http://localhost:4200/dashboard/employee/list";
   }
  }
  back(){
    this.location.back();
  }
}
