import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: CommonService, private router: Router, private fb: FormBuilder) { }

  registrationForm: FormGroup

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      ename: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      designation: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confPassword: ['', Validators.required]
    })
  }
  get ename() {
    return this.registrationForm.get("ename");
  } get email() {
    return this.registrationForm.get("email");
  } get mobile() {
    return this.registrationForm.get("mobile");
  } get desig() {
    return this.registrationForm.get("designation");
  } get uname() {
    return this.registrationForm.get("username");
  } get pass() {
    return this.registrationForm.get("password");
  }
  navigateToEmployeeList() {
    this.router.navigate(['dashboard', 'employee', 'list']);
  }
  registerAdmin() {
    if (this.registrationForm.valid) {
      let emp: Employee = this.registrationForm.value
      this.service.addEmployee(emp).subscribe(res => {

      })
    }
    window.location.reload();
  }
}
