import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private service : CommonService,private actRoute:ActivatedRoute,private location:Location) { }
  
  emp:Employee

  ngOnInit(): void {
    
    let id:number
    
    //Snapshot way of routing
    // id = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    // this.service.getEmployee(id).subscribe(res=>{
    //   this.emp = res
    // })

    //Observable Way of routing
   
    this.actRoute.paramMap.subscribe(res =>{
      id = parseInt(res.get('id'));
      this.service.getEmployee(id).subscribe(res1=>{
        this.emp = res1;
      })
    })

  }

  getBack(){
    this.location.back()
  }


}
